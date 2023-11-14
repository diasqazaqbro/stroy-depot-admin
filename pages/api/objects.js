import { mongooseConnect } from "@/lib/mongoose";
import { Objects } from "@/models/Objects";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Замените на ваш домен
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(await Objects.find());
  }

  if (method === "PUT") {
    const {
     mainNumber, numberOne, numberTwo, numberThree
    } = req.body;
    await Objects.updateOne({
     mainNumber, numberOne, numberTwo, numberThree
    });
    res.json(true);
  }
}
