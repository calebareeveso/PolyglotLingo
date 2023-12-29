import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SignUp from "@/components/signup";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function App() {
  // get the session
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  // display the page
  return (
    // <Main />
    <div className="">
      <SignUp />
    </div>
  );
}
