import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Faq } from "@/models/Faq";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});
    res.json(await Faq.find());
  }

  if (method === "PUT") {
    const {
      oneTitle,
      oneSupTitle,
      twoTitle,
      twoSupTitle,
      threeTitle,
      threeSupTitle,
    } = req.body;
    await Faq.updateOne({
      oneTitle,
      oneSupTitle,
      twoTitle,
      twoSupTitle,
      threeTitle,
      threeSupTitle,
    });
    res.json(true);
  }
}
