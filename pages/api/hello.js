// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz"); // Specify your actual domain
	res.setHeader(
	  "Access-Control-Allow-Methods",
	  "GET, PUT, POST, DELETE, OPTIONS"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.status(200).json({ name: 'Dias' })
}
