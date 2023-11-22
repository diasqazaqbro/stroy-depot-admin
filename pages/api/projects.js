import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/Projects";

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
    res.json(await Projects.find());
  }

  if (method === "PUT") {
    const {
      designTitleOne,
      designTitleTwo,
      designTitleThree,
      designTitleFour,
      designTitleFive,
      aTitleOne,
      aTitleTwo,
      aTitleThree,
    } = req.body;
    await Projects.updateOne({
      designTitleOne,
      designTitleTwo,
      designTitleThree,
      designTitleFour,
      designTitleFive,
      aTitleOne,
      aTitleTwo,
      aTitleThree,
    });
    res.json(true);
  }
}
