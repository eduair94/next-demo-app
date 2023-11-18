import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayout";
import type { Metadata } from "next";
import page from "../page";

export const metadata: Metadata = {
  title: "About Page",
  description: "Test About Page",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <DarkLayout>{children}</DarkLayout>
    </MainLayout>
  );
}
