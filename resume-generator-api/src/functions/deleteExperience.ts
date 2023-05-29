import { APIGatewayEvent, Handler, Context, APIGatewayProxyResult } from "aws-lambda";
import { middify } from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import experienceService from "../database/services";

export const handler: Handler = middify(
  async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const experienceId: string = event.pathParameters.experienceId;
    try {
      const experiences = await experienceService.deleteExperience(experienceId);

      return formatJSONResponse(200, experiences);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
, true);
