
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
      <div className="space-y-6 relative">
        {/* Background decoration */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-hostel-light rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-hostel-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
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
          
          <Card className="backdrop-blur-sm bg-white/80">
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
