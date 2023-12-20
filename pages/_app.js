import '@/styles/globals.css'
import '@/styles/style.sass'
import { SessionProvider } from 'next-auth/react'

export default function App({
	Component,
	pageProps: { ...pageProps },
}) {
console.log('Environment Variable:', process.env.HUDOS_LOGIN);

	return (
		<SessionProvider >
			<Component {...pageProps} />
		</SessionProvider>
	)
}
