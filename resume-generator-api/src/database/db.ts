import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import constants from '../constants';

const createDynamoDBClient = (): DocumentClient => {
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: constants.dynamodb.region,
      endpoint: constants.dynamodb.endpoint,
    });
  }

  return new AWS.DynamoDB.DocumentClient();
};

export default createDynamoDBClient;