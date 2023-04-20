import Image from 'next/image'
import { Inter } from 'next/font/google'
import { api } from '@/utils/trpc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: hello } = api.hello.useQuery({ text: 'World' })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {hello?.text}
    </main>
  )
}
