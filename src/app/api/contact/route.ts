import { Client } from "@/app/lib/mongodb";
import { Post } from "@/type";

export const POST = async (req: Request) => {
  const body: Post = await req.json();
  const client = await Client;
  client.connect();

  try {
    const db = client.db();
    const contactCollection = db.collection("contact");
    await contactCollection.insertOne({
      title: body.title,
      email: body.email,
      content: body.content,
      authorId: 1,
    });

    client.close();

    return new Response("Success inserting contact data", { status: 201 });
  } catch (error) {
    // 오류 처리
    console.error(`데이터 저장에 실패했습니다. \n ${error}`);
    return new Response(
      JSON.stringify({ error: "데이터 저장 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
};
