import prisma from "@/app/lib/prisma";
import { Post } from "@/type";

export const POST = async (req: Request) => {
  const body: Post = await req.json();

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        email: body.email,
        content: body.content,
        authorId: 1,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    // 오류 처리
    alert(`데이터 저장에 실패했습니다. \n ${error}`)
    return new Response(
      JSON.stringify({ error: "데이터 저장 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
};
