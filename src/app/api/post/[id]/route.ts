import prisma from "@/app/lib/prisma";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);

  try {
    const getPosts = await prisma.post.findMany({
      where: {
        authorId: id,
      },
      include: {
        author: {
          select: {
            email: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(getPosts));
  } catch (error) {
    console.error(`데이터 저장에 실패했습니다. \n ${error}`);
    return new Response(JSON.stringify(null));
  }
};
