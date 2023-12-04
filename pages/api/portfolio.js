import { mongooseConnect } from "@/lib/mongoose";
import { Portfolio } from "@/models/Portfolio";

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
    res.json(await Portfolio.find());
  }

  if (method === "POST") {
    const { title, supTitle, desc, imgId, construction } = req.body;
    const portfolioDoc = await Portfolio.create({
      title,
      supTitle,
      desc,
      imgId,
      construction,
    });
    res.json(portfolioDoc); 
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Portfolio.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
