import PublicHeader from "@/components/view/Header/PublicHeader";
import { authOptions } from "@/lib/AuthOptions";
import Title from "antd/es/typography/Title";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <PublicHeader />
      <h1>I am home page</h1>
    </>
  );
}
