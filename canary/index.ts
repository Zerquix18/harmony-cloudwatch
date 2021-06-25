import { APICanarySynthetics, RCP } from "../models";
const synthetics = require('synthetics') as APICanarySynthetics;

const handler = async function () {
  const method = JSON.parse(process.env.method!) as RCP;

  const callback = async function(res: any) {
    return new Promise<void>((resolve, reject) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
          throw res.statusCode + ' ' + res.statusMessage;
      }

      let responseBody = '';
      res.on('data', (d: string) => {
          responseBody += d;
      });

      res.on('end', () => {
          // Add validation on 'responseBody' here if required. For ex, your status code is 200 but data might be empty
          const body = JSON.parse(responseBody);
          if (! ('id' in body)) {
            throw 'id not in body';
          }

          resolve();
        });
    });
  };

  let stepConfig = {
    includeRequestHeaders: true, 
    includeResponseHeaders: true,
    includeRequestBody: true,
    includeResponseBody: true
  };

  await synthetics.executeHttpStep(
    method.name,
    {
      hostname: 'rpc.s0.t.hmny.io',
      method: 'POST',
      path: '/',
      port: 433,
      protocol: 'https',
    },
    callback,
    stepConfig
  )
};

export { handler };
