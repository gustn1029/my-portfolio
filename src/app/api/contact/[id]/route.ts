import { Client } from "@/app/lib/mongodb";
import { Document } from "mongodb";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  const client = Client;
  client.connect();

  try {
    const db = client.db();
    const contactCollection = db.collection("contact");
    const contact: Document | null = await contactCollection.find().toArray();

    client.close();

    return new Response(JSON.stringify(contact));
  } catch (error) {
    console.error(`데이터 저장에 실패했습니다. \n ${error}`);
    return new Response(JSON.stringify(null));
  }
};
