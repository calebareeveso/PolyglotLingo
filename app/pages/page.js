import Image from "next/image";
import BackButton from "@/components/backButton";
import Link from "next/link";

export default async function Instuctions() {
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
          <div className="grid grid-cols-1 max-w-lg mx-auto">
            {/* ////////////// */}
            <div>
              <div className="-translate-y-3 mx-auto text-white w-fit bg-gradient-to-t from-gray-500 to-gray-400 text-xl sm:text-2xl px-8 sm:px-16 py-3 border border-black">
                ALL PAGES (/pages)
                <br />
                <small>Click below ↓ </small>
              </div>
              <div className="text-center flex flex-col justify-around mt-3">
                <Link
                  target="_blank"
                  href={"/login"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Login Page (/login)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Home Page (/)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/repetition"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Repetition Page (/repetition)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/memorisation"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Memorisation Page (/memorisation)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/speedandaccuracy"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Speed and Accuracy Page (/speedandaccuracy)
                  </span>
                </Link>

                <Link
                  target="_blank"
                  href={"/results/previous"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Previous Results Page (/results/previous)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/results/view"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    View Results Page (/results/view)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/practice"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Practice Page (/practice)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"/instructions"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    Instructions Page (/instructions)
                  </span>
                </Link>

                <hr className="my-4" />
                <Link
                  target="_blank"
                  href={"/teachers"}
                  className="mb-2 w-full bg-white border border-black text-center p-2"
                >
                  <span className=" text-2xl sm:text-2xl py-3 ">
                    <strong>[EXTRA]</strong> Teachers <br /> Create Student
                    Accounts (/teachers)
                  </span>
                </Link>
              </div>
            </div>
            {/* ///////////////// */}
          </div>
        </section>
        <footer className="sm:flex justify-between px-2 pb-4">
          <div className="flex flex-col justify-around max-w-xl">
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
              :)
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
