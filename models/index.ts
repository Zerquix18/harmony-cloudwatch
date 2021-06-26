export type RCPParam = number | string | { [key: string]: RCPParam };
export type RCPResult = 'string' | 'number' | 'object';

export interface RCP {
  name: string;
  params: RCPParam[];
  result: RCPResult;
}

export * from './synthetics';
