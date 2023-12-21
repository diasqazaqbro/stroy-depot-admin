import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Partners } from "@/models/Partners";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});

    res.json(await Partners.find());
  }

  if (method === "PUT") {
    const { accent, title, desc } = req.body;
    await Partners.updateOne({
      accent,
      title,
      desc,
    });
    res.json(true);
  }
}
