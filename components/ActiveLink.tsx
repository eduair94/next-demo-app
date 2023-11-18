"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }: { href: string; text: string }) => {
  const asPath = usePathname();

  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
