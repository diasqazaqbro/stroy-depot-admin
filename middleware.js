import NextAuthMiddleware from 'next-auth/middleware';
import { setCorsHeaders } from './lib/cors';

export default async function handle(req, res) {
  setCorsHeaders(req, res, () => {});

  await NextAuthMiddleware(req, res);

}
