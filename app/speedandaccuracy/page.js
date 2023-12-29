import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BackButton from "@/components/backButton";
import Link from "next/link";

export default async function Instuctions() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="">
        <Link href={"/"}>
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

        <section className="bg-primary py-4 sm:py-10 px-4 border-t border-b border-black text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 my-2 ">
            <div className="">
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
            </div>
            {/* ////////////// */}
            <div>
              <div className="-translate-y-3 mx-auto text-white w-fit bg-gradient-to-t from-gray-500 to-gray-400 text-xl sm:text-2xl px-8 sm:px-16 py-3 border border-black">
                Speed and Accuracy <br />
                (Drag and Drop)
              </div>
              <div className="text-center flex justify-around mt-3">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
              <div className="text-center flex justify-around">
                <p className="mb-2 w-full bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
                </p>
              </div>
            </div>
            {/* ///////////////// */}
            <div className="">
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
              <div className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16">
                Image
              </div>
            </div>
          </div>
        </section>
        <footer className="sm:flex justify-between px-2 pb-4">
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
      </div>
    </main>
  );
}
