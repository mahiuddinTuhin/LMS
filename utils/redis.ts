import { Redis } from "ioredis";

require("dotenv").config();

const redisUrl = process.env.REDIS_URL;

const redisClient = () => {
  if (redisUrl) {
    console.log(`Redics Connected`);
    return redisUrl;
  }

  throw new Error("Redis connectoin failed");
};

export const redis = new Redis(redisClient());
