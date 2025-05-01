
import React, { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

type DashboardLayoutProps = {
  children: ReactNode;
  userName: string;
  userRole: string;
  notifications?: {
    id: string;
    message: string;
    time: string;
    read: boolean;
  }[];
};

const DashboardLayout = ({ 
  children,
  userName,
  userRole,
  notifications = []
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userRole={userRole} />
      <div className="ml-64">
        <Header 
          userName={userName} 
          userRole={userRole}
          notifications={notifications}
        />
        <main className="p-6 pt-24">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
