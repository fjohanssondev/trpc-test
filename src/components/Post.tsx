import React from 'react'

interface IPost {
  title: string,
  content: string,
  createdAt: string
}

const Post: React.FC<IPost> = ({ title, content, createdAt}) => {
  return (
    <article className='border-2 border-slate-600 rounded-sm p-4'>
      <div className='mb-2'>
        <h3 className='text-slate-200 font-semibold'>{title}</h3>
        <p className='text-slate-300 text-sm'>{content}</p>
      </div>
      <span className='text-slate-500 italic text-xs'>{new Date(createdAt).toDateString()}</span>
    </article>
  )
}

export default Post