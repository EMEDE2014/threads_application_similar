import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PostThread from "@/components/forms/PostThread";
async function Page() {
  const user = await currentUser();
  console.log(user, "AQUIE CONNECTADO");

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  console.log("=============================================");
  console.log(userInfo);

  console.log("=============================================");

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Threads</h1>;
      <PostThread userId={userInfo._id} />
    </>
  );
}
export default Page;
