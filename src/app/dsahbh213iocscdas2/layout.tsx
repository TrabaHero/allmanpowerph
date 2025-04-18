import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { dbPool } from "@/lib/db";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session?.user?.email) {
    redirect("/" + process.env.NEXT_PUBLIC_ADMIN_LOGIN_URL);
  }

  try {
    const result = await dbPool.query(
      "SELECT is_authorized FROM next_auth.users WHERE email = $1",
      [session.user.email]
    );

    if (result.rowCount === 0 || !result.rows[0].is_authorized) {
      console.log("Unauthorized");
      throw new Error("Unauthorized");
    }
  } catch (error) {
    console.error("Database error:", error);
    redirect("/error");
  }

  return <div>{children}</div>;
}
