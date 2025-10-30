"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  console.log("Session data:", session);
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email}{" "}
        <img
          src={session.user.image as string}
          alt={session.user.name as string}
        />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
