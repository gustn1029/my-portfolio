import { MongoClient, ServerApiVersion } from "mongodb";

const url = process.env.MONGODB_URL as string;

const Client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

export {Client};