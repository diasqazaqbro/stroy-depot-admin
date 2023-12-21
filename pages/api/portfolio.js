import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Portfolio } from "@/models/Portfolio";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});

    if (req.query?.id) {
      res.json(await Portfolio.findOne({ _id: req.query.id }));
    } else {
      res.json(await Portfolio.find());
    }
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

  if (method === "PUT") {
    const { title, supTitle, desc, imgId, construction, _id } =
      req.body;
    await Portfolio.updateOne(
      { _id },
      { title, supTitle, desc, imgId, construction }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Portfolio.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
