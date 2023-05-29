import { APIGatewayEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';
import { middify } from '../core/middify';

export const handler: Handler = middify(
  async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(event)
    return generatePolicy(event,'user');
}, false);

/**
 * @description Creates the IAM policy for the response.
 */
const generatePolicy = (event: any, principalId: string) => {
  // @see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
  const tmp = event.methodArn.split(':')
  const apiGatewayArnTmp = tmp[5].split('/')
  const awsAccountId = tmp[4]
  const awsRegion = tmp[3]
  const restApiId = apiGatewayArnTmp[0]
  const stage = apiGatewayArnTmp[1]
  const apiArn = 'arn:aws:execute-api:' + awsRegion + ':' + awsAccountId + ':' + restApiId + '/' + stage + '/*/*'

  const token = event.authorizationToken || event.headers.Authorization;
  const isAuthorized = isAllowedOrDenied(token);

  const response: any = {
    principalId
  };

  if (isAuthorized) {
    const policyDocument: any = {
      Version: '2012-10-17',
      Statement: []
    };

    policyDocument.Statement[0] = {
      Action: 'execute-api:Invoke',
      Effect: isAuthorized ? 'Allow' : 'Deny',
      Resource: [apiArn]
    };

    response.policyDocument = policyDocument;
  }

  return response;
};

const isAllowedOrDenied = (token: any) => {
  // TODO validate token and check is allowed based on claims
  return true;
};