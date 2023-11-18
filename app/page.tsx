import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="center">
        <h1 className="title">Home Page</h1>
        <Link className="description" href="/about">
          Go to About
        </Link>
      </div>
    </MainLayout>
  );
}
