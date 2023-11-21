import { mongooseConnect } from "@/lib/mongoose";
import { Welcome } from "@/models/Welcome";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", process.env.DOMEN);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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
