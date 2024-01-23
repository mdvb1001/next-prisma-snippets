import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetShowPageProps {
  params: { id: string }
}

interface Snippet {
  id: number
  title: string
  code: string
}

export default async function SnippetShowPage (Props: SnippetShowPageProps) {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(Props.params.id) }
  })
  if (!snippet) return notFound()

  return (
    <div>
      <h2>Show me that dirty snipper</h2>
      <div>
        <h2>Title: {snippet.title}</h2>
        <pre>Code: {snippet.code}</pre>
      </div>
    </div>
  )
}
