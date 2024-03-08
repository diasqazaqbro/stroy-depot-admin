import Link from 'next/link'

export default function Logo() {
	return (
		<Link href={'/'} className='flex gap-1'>
			<span>Stroy Depot Admin Panel</span>
		</Link>
	)
}
