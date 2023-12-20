
import { options } from '@/lib/options';
import NextAuth from 'next-auth';

const handler = NextAuth(options);

export default handler;
