
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import RoomManagement from "@/components/room/RoomManagement";

const RoomManagementPage = () => {
  // In a real app, this would come from your authentication context
  const userRole = localStorage.getItem('userRole') || "student";
  const userName = localStorage.getItem('userName') || "John Student";
  
  return (
    <DashboardLayout 
      userName={userName} 
      userRole={userRole}
    >
      <RoomManagement />
    </DashboardLayout>
  );
};

export default RoomManagementPage;
