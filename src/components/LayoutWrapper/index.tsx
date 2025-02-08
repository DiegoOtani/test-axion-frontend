"use client"

import Header from "../Header";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return <>
    {!isLoginPage && <Header />}
    {children}
  </>
};

export default LayoutWrapper;