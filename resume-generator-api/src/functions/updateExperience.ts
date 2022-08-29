import { APIGatewayEvent, Handler, Context, APIGatewayProxyResult } from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import experienceService from "../database/services";
import UpdateExperience from "../dtos/updateExperienceDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & UpdateExperience,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const experienceId: string = event.pathParameters.experienceId;
    const { body } = event;
    try {
      const experience = await experienceService.updateExperience(experienceId, body);

      return formatJSONResponse(200, experience);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
