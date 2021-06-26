import { APICanarySynthetics, APICanarySyntheticsExecuteHttpStepCallback, APICanarySyntheticsExecuteHttpStepRequestOptions, APISynthethicsConfigurationOptions, RCP } from "../models";
const synthetics = require('Synthetics') as APICanarySynthetics;

type JSONResponse = {
  [key: string]: string | number | JSONResponse;
}

const handler = async function () {
  const method = JSON.parse(process.env.method!) as RCP;

  const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: method.name,
    params: method.params,
  };
  const payloadString = JSON.stringify(payload);

  const stepName = method.name;
  const requestOptions: APICanarySyntheticsExecuteHttpStepRequestOptions = {
    hostname: method.host,
    method: 'POST',
    protocol: 'https:',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payloadString,
  };

  const callback: APICanarySyntheticsExecuteHttpStepCallback = async (response) => {
    const json = await new Promise<JSONResponse>((resolve, reject) => {
      if (! response.statusCode) {
        return reject('Could not get status code');
      }

      if (! (response.statusCode >= 200 && 299 >= response.statusCode)) {
        return reject(`Status code out of range (200-299): [${response.statusCode}]: ${response.statusMessage}`);
      }

      let responseBody = '';

      response.on('data', (d: string) => {
        responseBody += d;
      });

      response.on('end', () => {
        if (responseBody.length === 0) {
          return reject('Empty response.');
        }

        const body = JSON.parse(responseBody);
        resolve(body);
      });
    });

    if (! ('jsonrpc' in json)) {
      throw new Error(`'jsonrpc' not found in body.`);
    }

    if (! ('id' in json)) {
      throw new Error(`'id' not found in body.`);
    }

    if (! ('result' in json)) {
      throw new Error(`'result' not found in body.`);
    }

    const result = json.result;

    if (method.result !== typeof result) {
      throw new Error(`'result' in body is not the expected type: ${method.result}`);
    }

    // all good at this point. Further validation can be added to account for the full shape of `result`
    // if it's an object.

  };

  const stepConfig: APISynthethicsConfigurationOptions = {
    includeRequestHeaders: true, 
    includeResponseHeaders: true,
    includeRequestBody: true,
    includeResponseBody: true
  };

  await synthetics.executeHttpStep(stepName, requestOptions, callback, stepConfig);
};

export { handler };
