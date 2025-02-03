"use client";

import Link from "next/link";

interface SidebarProps {
  userRole: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Assessment NOVA</h2>
      <nav>
        <ul>
          {userRole === "calificador" && (
            <>
              <li><Link href="/dashboard/calificador">Calificar</Link></li>
            </>
          )}
          {userRole === "junta" && (
            <>
              <li><Link href="/dashboard/junta">Panel de la Junta</Link></li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
