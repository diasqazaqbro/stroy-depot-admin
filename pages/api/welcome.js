import { mongooseConnect } from "@/lib/mongoose";
import { Welcome } from "@/models/Welcome";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    res.json(await Welcome.find());
  }

  if (method === "PUT") {
    const { welcomeTitle, welcomeSupTitle, welcomeDesc } = req.body;
    await Welcome.updateOne({
      welcomeTitle,
      welcomeSupTitle,
      welcomeDesc,
    });
    res.json(true);
  }
}
