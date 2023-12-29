"use client";
import { signOut } from "next-auth/react";
export default function LogOut() {
  return (
    <button
      onClick={() => signOut()}
      className="border border-black bg-gradient-to-t from-gray-500 to-gray-400 py-3 px-6 sm:px-8 text-lg text-black w-fit mt-2"
    >
      Logout:
    </button>
  );
}
