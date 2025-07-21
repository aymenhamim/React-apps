import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex items-baseline justify-between ">
        <h3 className="text-3xl font-bold my-10">Snippets</h3>
        <Link href={"/snippets/new"}>New</Link>
      </div>

      <div>
        {snippets.map((s) => (
          <Link
            href={"/snippets/" + s.id}
            key={s.id}
            className="flex p-2 justify-between items-center rounded border my-1 border-stone-400 "
          >
            <div>{s.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
