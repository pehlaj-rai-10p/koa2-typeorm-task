import * as jwt from "jsonwebtoken";
import config from "../../config";
import { Context } from "koa";
import boom = require("boom");

export const checkJwt = async (ctx: Context, next: () => void) => {

  const token = ctx.headers['auth'];
  jwt.verify(token, config.jwtSecret);
  next();
};