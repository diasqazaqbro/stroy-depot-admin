import { mongooseConnect } from "@/lib/mongoose";
import { Settings } from "@/models/Settings";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Замените на ваш домен
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.json(await Settings.find());
  }

  if (method === "PUT") {
    const { number } = req.body;
    await Settings.updateOne({
      number,
    });
    res.json(true);
  }
}
