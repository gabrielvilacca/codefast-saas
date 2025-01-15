"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

const ButtonLogin = ({ session, extraStyle }) => {
  const dashboardUrl = "/dashboard";

  if (session) {
    return (
      <Link
        href={dashboardUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {session.user.name || "friend"}
      </Link>
    );
  }
  return (
    <button
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
    >
      Get started
    </button>
  );
};

export default ButtonLogin;
