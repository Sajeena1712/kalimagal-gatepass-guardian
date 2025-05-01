
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";

const AnalyticsPage = () => {
  // In a real app, this would come from your authentication context
  const userRole = localStorage.getItem('userRole') || "admin";
  const userName = localStorage.getItem('userName') || "Admin User";
  
  return (
    <DashboardLayout 
      userName={userName} 
      userRole={userRole}
    >
      <AnalyticsDashboard />
    </DashboardLayout>
  );
};

export default AnalyticsPage;
