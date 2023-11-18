import Link from "next/link";
import { headers } from "next/headers";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }: { href: string; text: string }) => {
  const headersList = headers();
  // read the custom x-url header
  const asPath = headersList.get("x-url") || "";
  console.log("asPath", asPath, href);
  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
