import { auth } from "@/auth";
import { database } from "@/db/database";

export default async function Home() {
  const session = await auth();
  const allItems = await database.query.items.findMany();

  if (!session) return null;
  const user = session.user;

  if (!user) return null;

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-2xl font-bold">Items For Sale</h1>
      <div className="grid grid-cols-4 gap-4">
        {allItems.map((item) => (
          <div className="border p-8 rounded-xl" key={item.id}>
            {item.name}
            starting price: {item.startingPrice / 100}
          </div>
        ))}
      </div>
    </main>
  );
}
