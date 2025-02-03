"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (!role) {
      router.push("/login");
    } else {
      setUserRole(role);
    }
  }, []);

  if (!userRole) return <div className="loading-container"><div className="loader"></div></div>;

  return (
    <div className="dashboard-container">
      <Sidebar userRole={userRole} />
      <div className="main-content">
        <TopBar />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
