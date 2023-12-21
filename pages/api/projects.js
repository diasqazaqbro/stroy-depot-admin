import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/Projects";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz"); // Specify your actual domain
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
      designLinkOne,
      designLinkTwo,
      designLinkThree,
      designLinkFour,
      designLinkFive,
      aLinkOne,
      aLinkTwo,
      aLinkThree,
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
      designLinkOne,
      designLinkTwo,
      designLinkThree,
      designLinkFour,
      designLinkFive,
      aLinkOne,
      aLinkTwo,
      aLinkThree,
    });
    res.json(true);
  }
}
