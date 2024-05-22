import { Item } from "@/db/schema";
import { getImageUrl } from "@/util/files";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { formatToDollar } from "@/util/currency";

export function ItemCard({ item }: { item: Item }) {
  return (
    <div key={item.id} className="border p-8 rounded-xl space-y-2">
      <Image
        src={getImageUrl(item.fileKey)}
        alt={item.fileKey}
        width={200}
        height={200}
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-lg">starting price: ${formatToDollar(item.startingPrice / 100)}</p>
      <Button asChild>
        <Link href={`/items/${item.id}`}>Place Bid</Link>
      </Button>
    </div>
  );
}
