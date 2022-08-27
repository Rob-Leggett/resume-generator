import createDynamoDBClient from "../db";
import ExperienceService from "./experienceService";

const { EXPERIENCES_TABLE } = process.env;

const experienceService = new ExperienceService(createDynamoDBClient(), EXPERIENCES_TABLE);

export default experienceService;
