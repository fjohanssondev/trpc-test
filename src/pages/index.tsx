import { Inter } from 'next/font/google'
import { api } from '@/utils/trpc'
import Form from '@/components/Form'
import Post from '@/components/Post'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: posts } = api.post.all.useQuery()

  return (
    <main className="flex bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen p-24">
      <div className='md:container md:mx-auto'>
        <h1 className="text-6xl text-slate-300 font-bold">Guestbook</h1>
        <div className='grid md:grid-cols-2 gap-24 mt-14'>
          <section>
            {posts?.length! > 0 ? posts?.map((post) => (
              <Post key={post.id} {...post} />
            )) : (
              <h2 className='text-2xl text-slate-400'>The Guestbook is empty :(</h2>
            )}
          </section>
          <section>
            <Form />
          </section>
        </div>
      </div>
    </main>
  )
}
