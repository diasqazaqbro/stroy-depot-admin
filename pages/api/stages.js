import { mongooseConnect } from "@/lib/mongoose";
import { Stages } from "@/models/Stages";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "https://hudos.vercel.app/"); // Замените на ваш домен
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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
