
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  // Mock data
  const student = {
    name: "John Student",
    rollNumber: "CS2023001",
    department: "Computer Science",
    year: "3rd Year",
    room: "B-204",
    gatepassesUsed: 1,
    gatepassLimit: 2,
  };

  const pendingGatepass = {
    id: "GP-2023-001",
    status: "Waiting for Tutor Approval",
    requestDate: "May 1, 2025",
    fromDate: "May 5, 2025",
    toDate: "May 7, 2025",
    reason: "Family function",
  };

  const recentActivity = [
    {
      id: 1,
      action: "Gatepass approved by Parent",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Gatepass request submitted",
      time: "5 hours ago",
    },
    {
      id: 3,
      action: "Profile updated",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <Link to="/gatepass/apply">
          <Button className="bg-hostel-primary hover:bg-hostel-primary/90">
            <FileText className="mr-2 h-4 w-4" /> Apply for Gatepass
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gatepass Quota</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {student.gatepassesUsed}/{student.gatepassLimit}
            </div>
            <p className="text-xs text-muted-foreground">
              Gatepasses used this month
            </p>
            <Progress 
              className="mt-3" 
              value={(student.gatepassesUsed / student.gatepassLimit) * 100} 
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Room Information</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{student.room}</div>
            <p className="text-xs text-muted-foreground">
              {student.department}, {student.year}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Student ID</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{student.rollNumber}</div>
            <p className="text-xs text-muted-foreground">
              {student.name}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Pending Gatepass</CardTitle>
            <CardDescription>Your most recent gatepass request</CardDescription>
          </CardHeader>
          <CardContent>
            {pendingGatepass ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Request Date</p>
                    <p className="text-sm">{pendingGatepass.requestDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-sm text-orange-500 font-medium">
                      {pendingGatepass.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">From Date</p>
                    <p className="text-sm">{pendingGatepass.fromDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">To Date</p>
                    <p className="text-sm">{pendingGatepass.toDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Reason</p>
                  <p className="text-sm">{pendingGatepass.reason}</p>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40">
                <p className="text-gray-500">No pending gatepass requests</p>
                <Link to="/gatepass/apply">
                  <Button className="mt-4">Apply for Gatepass</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent gatepass activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="mr-4 mt-0.5">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
