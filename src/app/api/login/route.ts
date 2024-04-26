import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    userName: string;
    password: string;
}

export async function POST(req: Request) {
    const body: RequestBody = await req.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.userName
        },
    });

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