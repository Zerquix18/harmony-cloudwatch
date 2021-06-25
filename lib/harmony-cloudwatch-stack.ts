import * as cdk from '@aws-cdk/core';
import * as synthetics from '@aws-cdk/aws-synthetics';
import * as path from 'path';
import * as fs from 'fs';
// weird! can't use cdk.Duration
import { Duration } from '@aws-cdk/aws-cloudwatch/node_modules/@aws-cdk/core';

import methods from './methods';

export class HarmonyCloudwatchStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    methods.forEach(method => {
      const canary = new synthetics.Canary(this, `Canary_${method.name}`, {
        canaryName: method.name,
        runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_3_1,
        schedule: synthetics.Schedule.rate(Duration.minutes(5)),
        test: synthetics.Test.custom({
          code: synthetics.Code.fromInline(fs.readFileSync(path.join(__dirname, '../canary/index.js'), 'utf8')),
          handler: 'index.handler',
        }),
        environmentVariables: {
          method: JSON.stringify(method),
        }
      });
    });
  }
}
