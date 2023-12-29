import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function SpeedAndAccuracy() {
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
          <h1 className="mb-2">
            <span className="bg-white text-xl sm:text-2xl px-8 sm:px-16 py-3 border border-black">
              Practise Questions:
            </span>
          </h1>
          <div className="sm:flex space-x-4 justify-between max-w-3xl mx-auto my-5 sm:my-10">
            <Link
              href={"/speedandaccuracy"}
              className="h-fit shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
            >
              Speed and Accuracy <br />
              (Drag and Drop)
            </Link>

            <div>
              <div className="text-center flex justify-around">
                <h1 className="mb-2 max-w-sm bg-white border border-black text-center p-2">
                  <span className=" text-2xl sm:text-4xl py-3   ">
                    Instructions:
                  </span>
                </h1>
              </div>
              <div className="sm:flex space-x-4 justify-around">
                <div className="text-center flex justify-around">
                  <h2 className=" max-w-sm bg-white border border-black text-center px-5 md:px-10 py-20 sm:py-32">
                    <span className=" text-2xl sm:text-4xl py-3   ">
                      "instructions"
                    </span>
                  </h2>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href={"/repetition"}
                  className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
                >
                  Start
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={"/memorisation"}
                className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 text-lg sm:text-2xl  text-white w-fit  mt-2"
              >
                Memorisation
              </Link>
            </div>
          </div>
        </section>
        <footer className="sm:flex justify-between px-2 pb-4">
          <div className="flex flex-col justify-around max-w-xl">
            {" "}
            <button className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-full mt-2 capitalize">
              {session.user.name}
            </button>
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
      </div>
    </main>
  );
}
