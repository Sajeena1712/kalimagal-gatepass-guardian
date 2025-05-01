
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Home,
  Check,
  X,
  BarChart,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  // Mock data
  const stats = {
    totalStudents: 245,
    roomsOccupied: 68,
    totalRooms: 80,
    pendingGatepasses: 12,
    approvedGatepasses: 24,
    rejectedGatepasses: 3,
  };

  const recentGatepasses = [
    {
      id: "GP-2023-005",
      student: "Rahul Kumar",
      rollNumber: "CS2023045",
      fromDate: "May 4, 2025",
      toDate: "May 6, 2025",
      status: "pending",
    },
    {
      id: "GP-2023-004",
      student: "Priya Singh",
      rollNumber: "EC2022012",
      fromDate: "May 3, 2025",
      toDate: "May 4, 2025",
      status: "approved",
    },
    {
      id: "GP-2023-003",
      student: "Arun Sharma",
      rollNumber: "ME2023078",
      fromDate: "May 2, 2025",
      toDate: "May 3, 2025",
      status: "rejected",
    },
    {
      id: "GP-2023-002",
      student: "Meera Patel",
      rollNumber: "CS2022034",
      fromDate: "May 1, 2025",
      toDate: "May 2, 2025",
      status: "approved",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button className="bg-hostel-primary hover:bg-hostel-primary/90">
          <BarChart className="mr-2 h-4 w-4" /> Generate Reports
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">
              Students currently in hostel
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Room Occupancy</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.roomsOccupied}/{stats.totalRooms}
            </div>
            <p className="text-xs text-muted-foreground">
              Rooms currently occupied
            </p>
            <Progress 
              className="mt-3" 
              value={(stats.roomsOccupied / stats.totalRooms) * 100} 
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Gatepasses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingGatepasses}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting approval
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.approvedGatepasses}</div>
            <p className="text-xs text-muted-foreground">
              Gatepasses approved today
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Gatepass Requests</CardTitle>
          <CardDescription>
            Recent gatepass applications and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Roll Number</TableHead>
                <TableHead>From Date</TableHead>
                <TableHead>To Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentGatepasses.map((gatepass) => (
                <TableRow key={gatepass.id}>
                  <TableCell className="font-medium">{gatepass.id}</TableCell>
                  <TableCell>{gatepass.student}</TableCell>
                  <TableCell>{gatepass.rollNumber}</TableCell>
                  <TableCell>{gatepass.fromDate}</TableCell>
                  <TableCell>{gatepass.toDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        gatepass.status === "approved"
                          ? "default"
                          : gatepass.status === "rejected"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {gatepass.status === "approved"
                        ? "Approved"
                        : gatepass.status === "rejected"
                        ? "Rejected"
                        : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {gatepass.status === "pending" && (
                        <>
                          <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Room Allocation Status</CardTitle>
            <CardDescription>
              Current occupancy by hostel block
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Block A</span>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <Progress value={85} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Block B</span>
                <span className="text-sm text-muted-foreground">92%</span>
              </div>
              <Progress value={92} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Block C</span>
                <span className="text-sm text-muted-foreground">78%</span>
              </div>
              <Progress value={78} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Block D</span>
                <span className="text-sm text-muted-foreground">64%</span>
              </div>
              <Progress value={64} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="bg-hostel-primary hover:bg-hostel-primary/90 flex flex-col h-24 items-center justify-center">
              <Users className="h-6 w-6 mb-2" />
              <span>Manage Students</span>
            </Button>
            <Button className="bg-hostel-primary hover:bg-hostel-primary/90 flex flex-col h-24 items-center justify-center">
              <Home className="h-6 w-6 mb-2" />
              <span>Room Allocation</span>
            </Button>
            <Button className="bg-hostel-primary hover:bg-hostel-primary/90 flex flex-col h-24 items-center justify-center">
              <FileText className="h-6 w-6 mb-2" />
              <span>Gatepass Reports</span>
            </Button>
            <Button className="bg-hostel-primary hover:bg-hostel-primary/90 flex flex-col h-24 items-center justify-center">
              <BarChart className="h-6 w-6 mb-2" />
              <span>Analytics</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
