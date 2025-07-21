"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

function Profile() {
  const session = useSession();

  console.log(session);

  if (session.data?.user) {
    return (
      <div className="flex items-center gap-4">
        From client:
        <Image
          src={session.data?.user?.image || ""}
          alt="user profile"
          width="50"
          height="50"
        />
        <p>{session.data?.user?.name}</p>
      </div>
    );
  }
  return <div>From client: user isnt signed In</div>;
}

export default Profile;
