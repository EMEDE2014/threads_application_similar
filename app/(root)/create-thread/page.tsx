import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  //   const userInfo = await
  return <h1>Create Threads</h1>;
}

export default Page;
