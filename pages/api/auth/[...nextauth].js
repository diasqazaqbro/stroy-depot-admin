import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const adminEmails = [
	process.env.EMAIL, '87779571856b@gmail.com', 'diasqazaqbro@mail.ru'
]

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	adapter: MongoDBAdapter(clientPromise),
	callbacks: {
		session: ({ session, token, user }) => {
			if (adminEmails.includes(session?.user?.email)) {
				return session
			} else {
				return false
			}
		},
	},
}
export default NextAuth(authOptions)

