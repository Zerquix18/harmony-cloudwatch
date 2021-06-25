/**
 * From: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library_Nodejs.html#CloudWatch_Synthetics_Library_Synthetics_Class_all
 * 
 * Doesn't exist in DefinitelyTyped ... yet! ;)
 */

import { IncomingMessage } from "http";
import { RequestOptions } from "https";
import { LaunchOptions, Page } from "puppeteer";

/**
 * For canaries using syn-nodejs-pupeteer-3.1 or later, the (options) 
 * for setConfig can include the following Boolean parameters that 
 * determine which metrics are published by the canary.
 * 
 * The `Duration` and `SuccessPercent` metrics are always emitted for each canary, both with and without the CanaryName metric.
 */
export declare interface SyntheticsConfigurationOptions {
  /**
   * Whether to emit the Failed metric (with the `CanaryName dimension) for this canary.
   * @default true
   */
  failedCanaryMetric?: boolean;
  /**
   * Whether to emit the Failed requests metric (with the `CanaryName` dimension) for this canary.
   * @default true
   */
  failedRequestsMetric?: boolean;
  /**
   * Whether to emit the `2xx` metric (with the `CanaryName` dimension) for this canary.
   * @default true
   */
  _2xxMetric?: boolean;
  /**
   * Whether to emit the `4xx` metric (with the `CanaryName` dimension) for this canary.
   * @default true
   */
  _4xxMetric?: boolean;
  /**
   * Whether to emit the `5xx` metric (with the `CanaryName` dimension) for this canary.
   */
  _5xxMetric?: boolean;
  /**
   * Whether to emit the `Step` duration metric (with the `CanaryName` `StepName` dimensions) for this canary.
   * @default true
   */
  stepDurationMetric?: boolean;
  /**
   * Whether to emit the `Step` success metric (with the `CanaryName` `StepName` dimensions) for this canary.
   * @default true
   */
  stepSuccessMetric?: boolean;
  /**
   * Whether to emit the Failed metric (without the `CanaryName` dimension) for this canary.
   * @default true
   */
  aggregatedFailedCanaryMetric?: boolean;
  /**
   * Whether to emit the `2xx` metric (without the `CanaryName` dimension) for this canary.
   * @default true
   */
  aggregated2xxMetric?: boolean;
  /**
   * Whether to emit the `4xx` metric (without the `CanaryName` dimension) for this canary.
   * @default true
   */
  aggregated4xxMetric?: boolean;
  /**
   * Whether to emit the `5xx` metric (without the `CanaryName` dimension) for this canary.
   * @default true
   */
  aggregated5xxMetric?: boolean;
}

/**
 * You can use the SyntheticsConfiguration class to configure the 
 * behavior of Synthetics library functions. For example, you can use 
 * this class to configure the executeStep() function to not capture 
 * screenshots.
 */
export declare class SyntheticsConfiguration {
  /**
   * Disables the canary from emitting all request metrics that are emitted with no CanaryName dimension
   */
  disableAggregatedRequestMetrics: () => void;
  /**
   * Disables all request metrics, including both per-canary metrics and metrics aggregated across all canaries.
   */
  disableRequestMetrics: () => void;
  /**
   * Enables the canary to emit all request metrics that are emitted with no `CanaryName` dimension.
   */
  enableAggregatedRequestMetrics: () => void;
  /**
   * Enables all request metrics, including both per-canary metrics and metrics aggregated across all canaries.
   */
  enableRequestMetrics: () => void;
  /**
   * Returns whether the canary emits a `2xx` metric with the `CanaryName` dimension.
  */
  get2xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `4xx` metric with the `CanaryName` dimension.
   */
  get4xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `5xx` metric with the CanaryName dimension.
   */
  get5xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `2xx` metric with no dimension.
   */
  getAggregated2xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `4xx` metric with no dimension.
   */
  getAggregated4xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `Failed` metric with no dimension
   */
  getAggregatedFailedCanaryMetric: () => boolean;
  /**
   * Returns whether the canary emits a `Failed` requests metric with no dimension.
   */
  getAggregatedFailedRequestsMetric: () => boolean;
  /**
   * Returns whether the canary emits a `5xx` metric with no dimension.
   */
  getAggregated5xxMetric: () => boolean;
  /**
   * Returns whether the canary emits a `Failed` metric with the `CanaryName` dimension.
   */
  getFailedCanaryMetric: () => boolean;
  /**
   * Returns whether the canary emits a Failed requests metric with the `CanaryName` dimension.
   */
  getFailedRequestsMetric: () => boolean;
  /**
   * Returns whether the canary emits a `Duration` metric with the `CanaryName` dimension for this canary.
   */
  getStepDurationMetric: () => boolean;
  /**
   * Returns whether the canary emits a `StepSuccess` metric with the `CanaryName` dimension for this canary.
   */
  getStepSuccessMetric: () => boolean;
  /**
   * Specifies whether to emit a `2xx` metric with the `CanaryName` dimension for this canary.
   */
  with2xxMetric: (_2xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a `4xx` metric with the `CanaryName` dimension for this canary.
   */
  with4xxMetric: (_4xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a `5xx` metric with the `CanaryName` dimension for this canary.
   */
  with5xxMetric: (_5xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a `2xx` metric with no dimension for this canary.
   */
  withAggregated2xxMetric: (aggregated2xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a `4xx` metric with no dimension for this canary.
   */
  withAggregated4xxMetric: (aggregated4xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a `5xx` metric with no dimension for this canary.
   */
  withAggregated5xxMetric: (aggregated5xxMetric: boolean) => this;
  /**
   * Specifies whether to emit a Failed metric with no dimension for this canary.
   */
  withAggregatedFailedCanaryMetric: (aggregatedFailedCanaryMetric: boolean) => this;
  /**
   * Specifies whether to emit a `Failed` requests metric with no dimension for this canary.
   */
  withAggregatedFailedRequestsMetric: (aggregatedFailedRequestsMetric: boolean) => this;
  /**
   * Specifies whether to emit a `Failed` metric with the `CanaryName` dimension for this canary.
   */
  withFailedCanaryMetric: (failedCanaryMetric: boolean) => this;
  /**
   * Specifies whether to emit a `Failed` requests metric with the `CanaryName` dimension for this canary.
   */
  withFailedRequestsMetric: (failedRequestsMetric: boolean) => this;
  /**
   * Specifies whether to emit a `Duration` metric with the `CanaryName` dimension for this canary.
   */
  withStepDurationMetric: (stepDurationMetric: boolean) => this;
  /**
   * Specifies whether to emit a `StepSuccess` metric with the `CanaryName` dimension for this canary.
   */
  withStepSuccessMetric: (stepSuccessMetric: boolean) => this;
}

export declare class Synthethics {
  /**
   * You can use addExecutionError to set execution errors for your
   * canary. It fails the canary without interrupting the script
   * execution. It also doesn't impact your successPercent metrics.
   */
  addExecutionError: (errorMessage: string, ex: Error) => void;
  /**
   * Returns the name of the canary.
   */
  getCanaryName: () => void;
  /**
   * This function is available in runtime version
   * syn-nodejs-puppeteer-3.0 and later. It returns the Synthetics
   * runtime version of the canary. For example, the return value could
   * be `syn-nodejs-puppeteer-3.0.`
   */
  getRuntimeVersion: () => string;
  /**
   * Retrieves the current log level for the Synthetics library. Possible values are the following:
   * 0 – `Debug`
   * 1 – `Info`
   * 2 – `Warn`
   * 3 – `Error`
   */
  getLogLevel: () => number;
  /**
   * Sets the log level for the Synthetics library. Possible values are the following:
   * 0 – `Debug`
   * 1 – `Info`
   * 2 – `Warn`
   * 3 – `Error`
   */
  setLogLevel: (logLevel: number) => void;
}

export declare interface UISynthethicsConfigurationOptions extends SyntheticsConfigurationOptions {
  /**
   * Whether to continue with running the canary script after a step fails (this refers to the executeStep function). If any steps fail, the canary run will still be marked as failed.
   * @default false
   */
  continueOnStepFailure: boolean;
  /**
   * Whether to take a screenshot before starting a step.
   */
  screenshotOnStepStart: boolean;
  /**
   * Whether to take a screenshot after completing a successful step.
   */
  screenshotOnStepSuccess: boolean;
  /**
   * Whether to take a screenshot after a step fails.
   */
  screenshotOnStepFailure: boolean;
}

export declare class UISynthethicsConfiguration extends SyntheticsConfiguration {
  setConfig: (config: UISynthethicsConfigurationOptions) => void;
  /**
   * Disables all screenshot options (screenshotOnStepStart, screenshotOnStepSuccess, and screenshotOnStepFailure).
   */
  disableStepScreenshots: () => void;
  /**
   * Enables all screenshot options (screenshotOnStepStart, screenshotOnStepSuccess, and screenshotOnStepFailure). By default, all these methods are enabled.
   */
  enableStepScreenshots: () => void;
  /**
   * Returns whether the canary takes a screenshot after a step fails.
   */
  getScreenshotOnStepFailure: () => boolean;
  /**
   * Returns whether the canary takes a screenshot before starting a step.
   */
  getScreenshotOnStepStart: () => boolean;
  /**
   * Returns whether the canary takes a screenshot after completing a step successfully.
   */
  getScreenshotOnStepSuccess: () => boolean;
  /**
   * Accepts a Boolean argument, which indicates whether to take a screenshot before starting a step.
   */
  withScreenshotOnStepStart: (value: boolean) => this;
  /**
   * Accepts a Boolean argument, which indicates whether to take a screenshot after completing a step successfully.
   */
  withScreenshotOnStepSuccess: (value: boolean) => this;
  /**
   * Accepts a Boolean argument, which indicates whether to take a screenshot after a step fails.
   */
  withScreenshotOnStepFailure: (value: boolean) => this;
}

export declare type UICanarySynthethicsExecuteStep = (
  stepName: string,
  functionToExecute: (timeoutInMillis?: number) => Promise<any>,
  stepConfig?: UISynthethicsConfigurationOptions
) => Promise<void>;

export declare class UICanarySynthethics extends Synthethics {
  addUserAgent: (page: Page, userAgentString: boolean) => Promise<void>;
  executeStep: UICanarySynthethicsExecuteStep;
  getConfiguration: () => UISynthethicsConfiguration;
  getDefaultLaunchOptions: () => Promise<LaunchOptions>;
  getPage: () => Page;
  getRequestResponseLogHelper: () => any; // todo
  launch: (options: LaunchOptions) => Promise<void>;
  // todo
  setRequestResponseLogHelper: (requestResponseLogHelper: any) => void;
  /**
   * Takes a screenshot (.PNG) of the current page with name and suffix (optional).
   */
  takeScreenshot: (name: string, suffix: string) => Promise<void>;
}

export declare interface APISynthethicsConfigurationOptions extends SyntheticsConfigurationOptions {
  /**
   * Whether to continue with running the canary script after an HTTP step fails (this refers to the **executeHttpStep** function). If any steps fail, the canary run will still be marked as failed.
   * @default true
   */
  continueOnHttpStepFailure?: boolean;
  /**
   * Whether to include request headers in the report.
   * @default false
   */
  includeRequestHeaders?: boolean;
  /**
   * Whether to include response headers in the report.
   * @default false
   */
  includeResponseHeaders?: boolean;
  /**
   * A list of header values to ignore, if headers are included. This applies to both request and response headers. For example, you can hide your credentials by passing **includeRequestHeaders** as true and **restrictedHeaders** as ['Authorization']
   */
  restrictedHeaders?: string[];
  /**
   * Whether to include the request body in the report.
   * @default false
   */
  includeRequestBody?: boolean;
  /**
   * Whether to include the response body in the report.
   * @default false
   */
  includeResponseBody?: boolean;
}

export declare class APICanarySyntheticsConfiguration extends SyntheticsConfiguration {
  setConfig: (config: APISynthethicsConfigurationOptions) => void;
  withIncludeRequestHeaders: (value: boolean) => this;
  withIncludeResponseHeaders: (value: boolean) => this;
  withRestrictedHeaders: (headers: string[]) => this;
  withIncludeRequestBody: (value: boolean) => this;
  withIncludeResponseBody: (value: boolean) => this;
  /**
   * Enables all reporting options-- **includeRequestHeaders**, **includeResponseHeaders**, **includeRequestBody**, and **includeResponseBody**.
  */
  enableReportingOptions: (value: boolean) => this;
  /**
   * Disables all reporting options-- **includeRequestHeaders**, **includeResponseHeaders**, **includeRequestBody**, and **includeResponseBody**.
   */
  disableReportingOptions: (value: boolean) => this;
}

export type APICanarySyntheticsExecuteHttpStep = (
  stepName: string,
  requestOptions: RequestOptions,
  callback?: (res: IncomingMessage) => Promise<void>,
  stepConfig?: APISynthethicsConfigurationOptions,
) => Promise<void>;

export declare class APICanarySynthetics extends Synthethics {
  getConfiguration: () => APICanarySyntheticsConfiguration;
  executeHttpStep: APICanarySyntheticsExecuteHttpStep;
}

export declare class SyntheticsLoggerLog {
  debug: (message: string, ex?: any) => void;
  error: (message: string, ex?: any) => void;
  info: (message: string, ex?: any) => void;
  log: (message: string, ex?: any) => void;
  warn: (message: string, ex?: any) => void;
}

/**
 * SyntheticsLogger writes logs out to both the console and to a local log file at the same log level. This log file is written to both locations only if the log level is at or below the desired logging level of the log function that was called.
 */
export declare class SyntheticsLogger {
  log: SyntheticsLoggerLog;
}
