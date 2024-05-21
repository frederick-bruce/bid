import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { createItemAction } from "@/lib/actions";

export default async function CreatePage() {
  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold">Post an Item</h1>
      <form
        className=" flex flex-col border p-8 rounded-xl space-y-4 max-w-md"
        action={createItemAction}
      >
        <Input
          required
          name="name"
          placeholder="Name your item"
          className="max-w-lg"
        />
        <Input
          required
          name="startingPrice"
          placeholder="What to start your auction at"
          className="max-w-lg"
          type="number"
        />
        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </main>
  );
}
