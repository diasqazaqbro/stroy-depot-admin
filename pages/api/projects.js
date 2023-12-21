import { setCorsHeaders } from "@/lib/cors";
import { mongooseConnect } from "@/lib/mongoose";
import { Projects } from "@/models/Projects";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});

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
