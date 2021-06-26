import * as cdk from '@aws-cdk/core';
import * as synthetics from '@aws-cdk/aws-synthetics';
import * as cloudwatch from '@aws-cdk/aws-cloudwatch';
import * as s3 from '@aws-cdk/aws-s3';
import * as path from 'path';
import * as fs from 'fs';
// weird! can't use cdk.Duration
import { Duration } from '@aws-cdk/aws-cloudwatch/node_modules/@aws-cdk/core';

import methods from './methods';

export class HarmonyCloudwatchStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, `CanariesBucket`, {
      bucketName: 'canaries-logs-bucket',
    });

    let names: string[] = [];
    methods.forEach(method => {
      // canary names cannot be longer than 21 characters and cant have uppercase letters
      // this is my attempt to have some kind of naming convention that is consistent and represents whats being called
      // this should probably be reviewed
      let canaryName = method.name.toLowerCase();
      if (canaryName.length > 21) {
        canaryName = canaryName.replace('hmyv2_', '');
        if (canaryName.length > 21) {
          canaryName = canaryName.substr(-21);
        }
      }
      if (names.indexOf(canaryName) !== -1) {
        canaryName = canaryName.substr(-20) + '2';
      }

      names.push(canaryName);

      const canary = new synthetics.Canary(this, `Canary_${method.name}`, {
        canaryName,
        runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_3_1,
        schedule: synthetics.Schedule.rate(Duration.minutes(5)),
        test: synthetics.Test.custom({
          code: synthetics.Code.fromInline(fs.readFileSync(path.join(__dirname, '../canary/index.js'), 'utf8')),
          handler: 'index.handler',
        }),
        environmentVariables: {
          method: JSON.stringify(method),
        },
        artifactsBucketLocation: { bucket },
      });

      const successAlarm = new cloudwatch.Alarm(this, `Canary_${method.name}SuccessAlarm`, {
        metric: canary.metricSuccessPercent(),
        comparisonOperator: cloudwatch.ComparisonOperator.LESS_THAN_THRESHOLD,
        threshold: 90, // %
        evaluationPeriods: 1, // minute
      });

      const durationAlarm = new cloudwatch.Alarm(this, `Canary_${method.name}DurationAlarm`, {
        metric: canary.metricDuration(),
        comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
        threshold: 30000, // ms
        evaluationPeriods: 5, // minute
      });

    });
  }
}
