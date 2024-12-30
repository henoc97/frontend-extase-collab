import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
