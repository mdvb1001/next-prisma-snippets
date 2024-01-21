import { db } from "@/db";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((s) => {
    return (<div key={s.id}>
      <h2>Title: {s.title}</h2>
      <pre>Code: {s.code}</pre>
    </div>)
  });
  return (
    <div>
      <h1>Home</h1>
      {renderedSnippets}
    </div>
  );
}
