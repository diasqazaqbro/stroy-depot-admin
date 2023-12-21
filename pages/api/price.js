import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Price } from "@/models/Price";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});

    res.json(await Price.find());
  }

  if (method === "PUT") {
    const {
      oneTitle,
      oneSupTitle,
      oneDesc,
      twoTitle,
      twoSupTitle,
      twoDesc,
      threeTitle,
      threeSupTitle,
      threeDesc,
      fourTitle,
      fourSupTitle,
      fourDesc,
    } = req.body;
    await Price.updateOne({
      oneTitle,
      oneSupTitle,
      oneDesc,
      twoTitle,
      twoSupTitle,
      twoDesc,
      threeTitle,
      threeSupTitle,
      threeDesc,
      fourTitle,
      fourSupTitle,
      fourDesc,
    });
    res.json(true);
  }
}
