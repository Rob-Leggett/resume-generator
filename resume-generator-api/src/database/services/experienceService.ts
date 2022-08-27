import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Experience from "./models/Experience";

class ExperienceService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllExperiences(): Promise<Experience[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Experience[];
  }

  async getExperience(experienceId: string): Promise<Experience> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { experienceId },
      })
      .promise();

    return result.Item as Experience;
  }

  async createExperience(experience: Experience): Promise<Experience> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: experience,
      })
      .promise();

    return experience;
  }

  async updateExperience(experienceId: string, partialExperience: Partial<Experience>): Promise<Experience> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { experienceId },
        UpdateExpression:
          "set #title = :title, description = :description, active = :active",
        ExpressionAttributeNames: {
          "#title": "title",
        },
        ExpressionAttributeValues: {
          ":title": partialExperience.title,
          ":description": partialExperience.description,
          ":active": partialExperience.active,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Experience;
  }

  async deleteExperience(experienceId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { experienceId },
      })
      .promise();
  }
}

export default ExperienceService;