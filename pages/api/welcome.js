import { mongooseConnect } from "@/lib/mongoose";
import { Welcome } from "@/models/Welcome";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Welcome.find());
  }

  if (method === "PUT") {
    const { welcomeTitle, welcomeSupTitle, welcomeDesc } = req.body;
    await Welcome.updateOne({
      welcomeTitle,
      welcomeSupTitle,
      welcomeDesc,
    });
    res.json(true);
  }
}
