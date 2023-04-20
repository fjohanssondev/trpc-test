import { Inter } from 'next/font/google'
import { api } from '@/utils/trpc'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: posts } = api.post.all.useQuery()

  return (
    <main className="flex bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen p-24">
      <div className='md:container md:mx-auto'>
        <h1 className="text-6xl text-slate-300 font-bold">Guestbook</h1>
        <div className='grid md:grid-cols-2 gap-24 mt-14'>
          <section>
            {posts?.length! > 0 ? posts?.map(({ id, title, content, createdAt }) => (
              <article className='border-2 border-slate-600 rounded-sm p-4' key={id}>
                <div className='mb-2'>
                  <h3 className='text-slate-200 font-semibold'>{title}</h3>
                  <p className='text-slate-300 text-sm'>{content}</p>
                </div>
                <span className='text-slate-500 italic text-xs'>{new Date(createdAt).toDateString()}</span>
              </article>
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
