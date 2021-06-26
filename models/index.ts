export type RCPParam = number | string | boolean | { [key: string]: RCPParam };
export type RCPResult = 'string' | 'number' | 'object' | 'boolean';

export interface RCP {
  host: string;
  name: string;
  params: RCPParam[];
  result: RCPResult;
}

export * from './synthetics';
