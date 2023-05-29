import { Handler } from "aws-lambda";
import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import cors from "@middy/http-cors";

export const middify = (handler: Handler, useCors: boolean) => {
  const parser = middy(handler).use(middyJsonBodyParser())

  if (useCors) {
    parser.use(cors());
  }

  return parser;
};
