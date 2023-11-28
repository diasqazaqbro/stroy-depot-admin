import { mongooseConnect } from "@/lib/mongoose";
import { Footer } from "@/models/Footer";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(await Footer.find());
  }

  if (method === "PUT") {
    const {
      address,
      workTime,
      holiday,
      clientNumber,
      clientEmail,
      partnerNumber,
      partnerEmail,
    } = req.body;
    await Footer.updateOne({
      address,
      workTime,
      holiday,
      clientNumber,
      clientEmail,
      partnerNumber,
      partnerEmail,
    });
    res.json(true);
  }
}
