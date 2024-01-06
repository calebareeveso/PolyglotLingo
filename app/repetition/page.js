import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BackButton from "@/components/backButton";
import Link from "next/link";
import Track from "@/components/track";

export default async function Instuctions() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 my-2 ">
          <div className="md:mt-40">
            {/* track */}
            <Track />
            <button className="w-fit border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black mt-2 capitalize">
              Play Back
            </button>
          </div>
          {/* ////////////// */}
          <div>
            <div className=" mx-auto text-white w-fit bg-gradient-to-t from-gray-500 to-gray-400 text-xl sm:text-2xl px-8 sm:px-16 py-3 sm:py-8 border border-black">
              Repetition
            </div>
          </div>
          {/* ///////////////// */}
          <div className="md:mt-40">
            {/* track */}
            <Track />
            <button className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-fit mt-2 capitalize">
              Record
            </button>
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
        <div className="flex flex-col justify-around">
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
