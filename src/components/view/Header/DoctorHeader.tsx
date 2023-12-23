import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const DoctorHeader = async () => {
  const items = [{ key: "1", label: "My Profile", href: "/doctor/my-profile" }];
  const session = await getServerSession(authOptions);

  return <Navbar session={session ? true : false} items={items} />;
};

export default DoctorHeader;
