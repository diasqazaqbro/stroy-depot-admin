// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { setCorsHeaders } from "@/lib/cors";

export default function handler(req, res) {
	setCorsHeaders(req, res, () => {});
	res.status(200).json({ name: 'Dias' })
}
