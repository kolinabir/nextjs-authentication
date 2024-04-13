import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name ?? "to the dashboard"}
      </h1>

      <h1 className="text-4xl text-center mt-10">
        Logged in as {session?.user?.email ?? "no email"}
      </h1>

      <Image
        src={session?.user?.image as string}
        width={200}
        height={200}
        alt="avatar"
        className="rounded-full mx-auto mt-10"
      />
    </div>
  );
};

export default DashboardPage;
