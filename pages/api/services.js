import { mongooseConnect } from "@/lib/mongoose";
import { Services } from "@/models/Services";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Services.find());
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
    await Services.updateOne({
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
