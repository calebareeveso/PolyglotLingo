"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import addUser from "@/lib/fetch/add/user";
import Image from "next/image";
export default function SignUp() {
  const [currentLanguage, setCurrentLanguage] = useState("oranges");

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addUser({
        name: name,
        email: email,
        username: name.toLowerCase().replace(/\s/g, ""),
        password: password,
      });

      if (res.error) {
        // alert("Invalid Credentials")
        setError("Invalid Credentials");
        return;
      }
      if (res.message) {
        console.log(res);
        const loginResult = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (loginResult) {
          router.replace("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
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

      <section className="bg-primary py-4 sm:py-10 px-4 border-t border-b border-black ">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-3 mx-auto">
            Create Student Accounts
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-2xl mx-auto"
        >
          <label
            htmlFor="name"
            className="block text-black text-lg sm:text-2xl"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            name="name"
            className="text-lg p-3 outline-primary bg-white border border-black"
          />
          <label
            htmlFor="email"
            className="block text-black text-lg sm:text-2xl"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            name="email"
            className="text-lg p-3 outline-primary bg-white border border-black"
          />
          <label
            htmlFor="password"
            className="block text-black text-lg sm:text-2xl"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
            className="text-lg p-3 outline-primary bg-white border border-black"
          />
          <button className="bg-gradient-to-t from-gray-500 to-gray-200 py-3 px-6 text-lg text-white w-fit mx-auto mt-2">
            Create
          </button>
          {error && (
            <div className="admin_login_error">
              <p>{error}</p>
            </div>
          )}
        </form>
      </section>
      <div className="sm:flex justify-between">
        <Image
          className="mx-auto sm:mx-0"
          src={"/assets/images/pmsLogo.png"}
          alt={"PMS Logo"}
          width={300} // Set the desired width
          height={150} // Set the desired height
        />
        <div className="flex justify-around sm:block">
          {" "}
          <select
            onChange={(event) => changeLanguage(event.target.value)}
            value={currentLanguage}
            className="bg-gradient-to-t from-gray-900 to-gray-400 py-3 px-6 sm:px-8 text-lg text-white w-fit mx-auto mt-2"
          >
            <option value="english">English</option>
            <option value="not-english">Not English</option>
            <option value="not-english">Not English</option>
            <option value="not-english">Not English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
