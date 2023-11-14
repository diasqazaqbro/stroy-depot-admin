import { mongooseConnect } from "@/lib/mongoose";
import { Objects } from "@/models/Objects";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
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
