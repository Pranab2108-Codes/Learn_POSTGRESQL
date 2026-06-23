import "dotenv/config";
import { Client } from 'pg';


export async function getClient() {

  const client = new Client("postgresql://neondb_owner:npg_wT7cxQ8rpCBy@ep-cold-field-aj0o2squ-pooler.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
  await client.connect();
  return client;

}