import { mongooseConnect } from "@/lib/mongoose";
import { Faq } from "@/models/Faq";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
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
