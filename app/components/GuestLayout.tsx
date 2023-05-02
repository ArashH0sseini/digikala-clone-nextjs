import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

function GuestLayout({ children }: Props) {
  const router = useRouter()
  const { user, error, loading } = useAuth();


  if(user){
    router.push('/panel')
    return <></>
  }

  console.log(user)

  return <div>{children}</div>;
}

export default GuestLayout;
