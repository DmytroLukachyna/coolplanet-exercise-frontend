import { UserIdParam } from "@/types/api/user";
import { UserLayout } from "@/layouts/user";

export default async function User({ params }: { params: Promise<UserIdParam> }) {
  const userID = (await params).id;
  return <UserLayout id={userID} />;
}
