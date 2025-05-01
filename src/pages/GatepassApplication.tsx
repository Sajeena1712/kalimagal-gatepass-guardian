
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GatepassForm from "@/components/gatepass/GatepassForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const GatepassApplication = () => {
  // In a real app, this would come from your authentication context
  const userName = localStorage.getItem('userName') || "John Student";
  const userRole = localStorage.getItem('userRole') || "student";
  
  // Mock notification
  const notifications = [
    {
      id: "1",
      message: "Your last gatepass request was approved by the warden",
      time: "2 hours ago",
      read: false
    }
  ];
  
  return (
    <DashboardLayout 
      userName={userName}
      userRole={userRole}
      notifications={notifications}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Apply for Gatepass</h1>
        
        <div className="grid gap-6">
          <Alert variant="default" className="border-hostel-primary bg-hostel-light text-hostel-primary">
            <Info className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              You are allowed a maximum of 2 gatepasses per month. Please plan accordingly.
              Your parent will receive a notification for approval once you submit this request.
            </AlertDescription>
          </Alert>
          
          <Card>
            <CardHeader>
              <CardTitle>Gatepass Request Form</CardTitle>
              <CardDescription>
                Complete all details to submit your gatepass application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GatepassForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GatepassApplication;
