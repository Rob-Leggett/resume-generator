import { APIGatewayEvent, Handler, Context, APIGatewayProxyResult } from "aws-lambda";
import * as uuid from "uuid";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import experienceService from "../database/services";
import CreateExperience from "../dtos/createExperienceDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & CreateExperience,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const { role, from, to, tasks } = event.body;

    try {
      const experienceId: string = uuid.v4();
      const experience = await experienceService.createExperience({
        experienceId,
        role,
        from,
        to,
        tasks,
        active: true,
        createdAt: new Date().toISOString(),
      });

      return formatJSONResponse(201, experience);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
