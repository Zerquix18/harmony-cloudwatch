#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HarmonyCloudwatchStack } from '../lib/harmony-cloudwatch-stack';

const app = new cdk.App();
new HarmonyCloudwatchStack(app, 'HarmonyCloudwatchStack');
