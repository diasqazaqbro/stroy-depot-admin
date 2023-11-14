import { mongooseConnect } from "@/lib/mongoose";
import { Settings } from "@/models/Settings";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Settings.find());
  }

  if (method === "PUT") {
    const {
      number,
    } = req.body;
    await Settings.updateOne({
      number,
    });
    res.json(true);
  }
}
