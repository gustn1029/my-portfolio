import { Client } from "@/app/lib/mongodb";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  try {
    const client = await Client;
    client.connect();

    const db = client.db();

    const usersCollection = db.collection("user");
    const hashedPassword = await bcrypt.hash(body.password, 10);
    
    await usersCollection.insertOne({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    client.close()

    return new Response("Success inserting user", {status: 201});
  } catch (error) {
    console.error("Error inserting user:", error);
    return new Response("Error inserting user", { status: 500 });
  }
}
