import Image from "next/image";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";
import { auth } from "@/auth";
import Link from "next/link";

export async function Header() {
  const session = await auth();

  return (
    <div className="bg-gray-100 py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:underline">
              <Image src="/logo.png" width="50" height="50" alt="Logo" />
            </Link>
            BidBuddy.com
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Link href="/items/create" className="hover:underline">
                Auction an Item
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>{session?.user?.name}</div>
          <div>{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
}
