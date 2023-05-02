import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

function AdminPanelLayout({ children }: Props) {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    router.push("/login");
    return <></>;
  }

  if (!user?.is_admin) {
    router.push("/");
    return <></>;
  }

  return <div>{children}</div>;
}

export default AdminPanelLayout;
