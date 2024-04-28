import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    userEmail: string;
    password: string;
}

export const POST = async (req:Request) => {
    const body: RequestBody = await req.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.userEmail,
        },
    })

    if(user && (await bcrypt.compare(body.password, user.password))) {
        const {password, ...userWithoutPassword} = user;

        const accessToken = signJwtAccessToken(userWithoutPassword);
        const result = {
            ...userWithoutPassword,
            accessToken,
        }

        return new Response(JSON.stringify(result));
    } else {
        return new Response(JSON.stringify(null));
    }
}