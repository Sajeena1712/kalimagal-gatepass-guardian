
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  BarChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AnalyticsDashboard = () => {
  // Mock data for charts
  const gatepassData = [
    { month: "Jan", requests: 45, approved: 38, rejected: 7 },
    { month: "Feb", requests: 52, approved: 42, rejected: 10 },
    { month: "Mar", requests: 61, approved: 50, rejected: 11 },
    { month: "Apr", requests: 58, approved: 45, rejected: 13 },
    { month: "May", requests: 48, approved: 40, rejected: 8 },
  ];

  const departmentData = [
    { name: "CSE", students: 85, value: 85 },
    { name: "ECE", students: 65, value: 65 },
    { name: "ME", students: 45, value: 45 },
    { name: "CE", students: 30, value: 30 },
    { name: "EEE", students: 20, value: 20 },
  ];

  const reasonData = [
    { name: "Family Function", value: 35 },
    { name: "Medical Emergency", value: 20 },
    { name: "Interview", value: 15 },
    { name: "Personal Work", value: 25 },
    { name: "Others", value: 5 },
  ];

  const COLORS = ["#9b87f5", "#6E59A5", "#E5DEFF", "#1A1F2C", "#7E69AB"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Select defaultValue="month">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gatepass">Gatepass Analysis</TabsTrigger>
          <TabsTrigger value="rooms">Room Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Gatepass Requests Trend</CardTitle>
                <CardDescription>Monthly gatepass activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={gatepassData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="requests"
                        stackId="1"
                        stroke="#9b87f5"
                        fill="#9b87f5"
                        name="Total Requests"
                      />
                      <Area
                        type="monotone"
                        dataKey="approved"
                        stackId="2"
                        stroke="#6E59A5"
                        fill="#6E59A5"
                        name="Approved"
                      />
                      <Area
                        type="monotone"
                        dataKey="rejected"
                        stackId="3"
                        stroke="#E5DEFF"
                        fill="#E5DEFF"
                        name="Rejected"
                      />
                      <Legend />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Distribution</CardTitle>
                <CardDescription>Students by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} students`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Gatepass Reasons Analysis</CardTitle>
                <CardDescription>Common reasons for gatepass requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={reasonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#6E59A5" name="Count" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gatepass">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Gatepass Analysis</CardTitle>
              <CardDescription>Coming soon...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-20">
                <p>Detailed gatepass analytics will be available in the next version.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rooms">
          <Card>
            <CardHeader>
              <CardTitle>Room Occupancy Analysis</CardTitle>
              <CardDescription>Coming soon...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-20">
                <p>Room occupancy analytics will be available in the next version.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
