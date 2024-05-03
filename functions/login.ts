import { signJwtAccessToken } from "@/app/lib/jwt";
import { Client } from "@/app/lib/mongodb";
import * as bcrypt from "bcrypt";
import { Document } from "mongodb";

interface RequestBody {
    userName: string;
    password: string;
}

export async function POST(req: Request) {
    const body: RequestBody = await req.json();

    const client = await Client;

    client.connect()

    const db = client.db();
    const user: Document | null = await db.collection("user").findOne({ email: body.userName });

    if(user && (await bcrypt.compare(body.password, user.password))) {
        const {password, ...userWithoutPass} = user;

        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken,
        }

        return new Response(JSON.stringify(result));
    } else {
        return new Response(JSON.stringify(null));
    }
}