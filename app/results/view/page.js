import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Link from "next/link";
import BackButton from "@/components/backButton";

export default async function viewResults() {
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
        <h1 className="mb-2">
          <span className="bg-white text-xl sm:text-2xl px-8 sm:px-16 py-3 border border-black">
            View Result/score.
          </span>
        </h1>
        <div className="sm:flex space-x-4 justify-between max-w-3xl mx-auto my-20 sm:my-40">
          <Link
            href={"/instructions"}
            className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
          >
            Memorisation
          </Link>
          <Link
            href={"/instructions"}
            className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
          >
            Speed and Accuracy
          </Link>
          <Link
            href={"/instructions"}
            className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
          >
            Repetition
          </Link>
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
