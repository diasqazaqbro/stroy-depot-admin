import { mongooseConnect } from "@/lib/mongoose";
import { Stages } from "@/models/Stages";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Stages.find());
  }

  if (method === "PUT") {
    const {
      oneTitle,
      oneDesc,
      twoTitle,
      twoDesc,
      threeTitle,
      threeDesc,
      fourTitle,
      fourDesc,
      fiveTitle,
      fiveDesc,
      sixTitle,
      sixDesc,
      sevenTitle,
      sevenDesc,
      eightTitle,
      eightDesc,
    } = req.body;
    await Stages.updateOne({
      oneTitle,
      oneDesc,
      twoTitle,
      twoDesc,
      threeTitle,
      threeDesc,
      fourTitle,
      fourDesc,
      fiveTitle,
      fiveDesc,
      sixTitle,
      sixDesc,
      sevenTitle,
      sevenDesc,
      eightTitle,
      eightDesc,
    });
    res.json(true);
  }
}
