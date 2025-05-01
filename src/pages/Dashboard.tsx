
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

const Dashboard = () => {
  // In a real app, this would come from your authentication context
  const userRole = localStorage.getItem('userRole') || "student";
  const userName = localStorage.getItem('userName') || "John Student";
  
  // Mock notifications
  const notifications = [
    {
      id: "1",
      message: "Your gatepass request has been approved by the warden",
      time: "2 hours ago",
      read: false
    },
    {
      id: "2",
      message: "New hostel rules have been published",
      time: "1 day ago",
      read: true
    }
  ];
  
  // Render different dashboard based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case "student":
        return <StudentDashboard />;
      case "admin":
      case "warden":
      case "tutor":
      case "hod":
        return <AdminDashboard />;
      default:
        return <StudentDashboard />;
    }
  };
  
  return (
    <DashboardLayout 
      userName={userName} 
      userRole={userRole}
      notifications={notifications}
    >
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;
