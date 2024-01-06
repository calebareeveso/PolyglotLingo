import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Link from "next/link";
import BackButton from "@/components/backButton";

export default async function PreviousResults() {
  const session = await getServerSession(authOptions);
  return (
    <main className="grid grid-rows-6 h-lvh">
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
      <section className="row-span-4 bg-primary py-4 sm:py-10 px-4 border-t border-b border-black text-center">
        <div className="text-center flex justify-around">
          <h1 className="mb-2 max-w-sm bg-white border border-black text-center p-2">
            <span className=" text-2xl sm:text-4xl py-3   ">
              Memorisation or Speed and accuracy results
            </span>
          </h1>
        </div>
        <div className="sm:flex space-x-4 justify-around">
          <div className="text-center flex justify-around">
            <h2 className=" max-w-sm bg-white border border-black text-center p-2 mt-10 mb-32">
              <span className=" text-2xl sm:text-4xl py-3   ">X/X or %</span>
            </h2>
          </div>
        </div>
      </section>
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
        <div className="px-20"> </div>
      </footer>
    </main>
  );
}
