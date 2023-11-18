import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="center">
        <h1 className="title">Pricing Page</h1>
        <Link className="description" href="/">
          Go to Home
        </Link>
      </div>
    </MainLayout>
  );
}
