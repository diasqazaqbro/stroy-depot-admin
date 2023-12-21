import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Objects } from "@/models/Objects";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});

    res.json(await Objects.find());
  }

  if (method === "PUT") {
    const { mainNumber, numberOne, numberTwo, numberThree } = req.body;
    await Objects.updateOne({
      mainNumber,
      numberOne,
      numberTwo,
      numberThree,
    });
    res.json(true);
  }
}
