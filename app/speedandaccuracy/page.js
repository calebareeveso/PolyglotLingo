import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BackButton from "@/components/backButton";
import Link from "next/link";
import DragnDrop from "@/components/dragndrop";

export default async function Instuctions() {
  const session = await getServerSession(authOptions);
  return (
    <main className="grid grid-rows-6 min-h-lvh">
      <div className="row-span-1 flex items-center">
        <Link href={"/"} className="mx-auto">
          {/* desktop */}
          <Image
            className="mx-auto hidden sm:block"
            src={"/assets/images/appLogo.jpg"}
            alt={"Polyglot Lingo Logo"}
            width={200}
            height={100}
          />
          {/* mobile */}
          <Image
            className="mx-auto sm:hidden block"
            src={"/assets/images/appLogo.jpg"}
            alt={"Polyglot Lingo Logo"}
            width={160}
            height={80}
          />
        </Link>
      </div>
      <DragnDrop />
      <footer className="row-span-1 sm:flex justify-between px-2 pb-4">
        <div className="flex flex-col justify-around max-w-xl">
          {" "}
          <button className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-full mt-2 capitalize">
            {session.user.name}
          </button>
          <BackButton />
        </div>
        <div>
          <Image
            className="mx-auto sm:mx-0"
            src={"/assets/images/pmsLogo.png"}
            alt={"PMS Logo"}
            width={300} // Set the desired width
            height={150} // Set the desired height
          />
        </div>
        <div className="flex flex-col justify-around max-w-xl">
          {" "}
          <button className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-full mt-2 capitalize">
            Score: ""
          </button>
          <button className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-full mt-2 capitalize">
            Timer: x
          </button>
        </div>
      </footer>
    </main>
  );
}
