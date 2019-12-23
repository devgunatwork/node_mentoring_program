import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Choose the port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * For winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api"
  }
};
