import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="center">
        <h1 className="title">Contact Page</h1>
        <Link className="description" href="/pricing">
          Go to Pricing
        </Link>
      </div>
    </MainLayout>
  );
}
