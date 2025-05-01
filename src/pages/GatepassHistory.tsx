
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const GatepassHistory = () => {
  // In a real app, this would come from your authentication context
  const userName = localStorage.getItem('userName') || "John Student";
  const userRole = localStorage.getItem('userRole') || "student";
  
  const [filter, setFilter] = React.useState("all");
  const [selectedGatepass, setSelectedGatepass] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  
  // Mock gatepass history data
  const gatepasses = [
    {
      id: "GP-2023-005",
      requestDate: "May 1, 2025",
      fromDate: "May 5, 2025",
      toDate: "May 7, 2025",
      reason: "Family function",
      status: "pending",
      approvals: [
        { role: "Parent", name: "Mr. Kumar", status: "approved", date: "May 1, 2025" },
        { role: "Tutor", name: "Dr. Smith", status: "pending", date: "-" },
        { role: "Warden", name: "Mr. Johnson", status: "pending", date: "-" },
        { role: "HOD", name: "Prof. Williams", status: "pending", date: "-" },
      ],
    },
    {
      id: "GP-2023-004",
      requestDate: "Apr 15, 2025",
      fromDate: "Apr 20, 2025",
      toDate: "Apr 22, 2025",
      reason: "Medical appointment",
      status: "approved",
      approvals: [
        { role: "Parent", name: "Mr. Kumar", status: "approved", date: "Apr 15, 2025" },
        { role: "Tutor", name: "Dr. Smith", status: "approved", date: "Apr 16, 2025" },
        { role: "Warden", name: "Mr. Johnson", status: "approved", date: "Apr 16, 2025" },
        { role: "HOD", name: "Prof. Williams", status: "approved", date: "Apr 17, 2025" },
      ],
    },
    {
      id: "GP-2023-003",
      requestDate: "Mar 10, 2025",
      fromDate: "Mar 15, 2025",
      toDate: "Mar 16, 2025",
      reason: "Job interview",
      status: "rejected",
      approvals: [
        { role: "Parent", name: "Mr. Kumar", status: "approved", date: "Mar 10, 2025" },
        { role: "Tutor", name: "Dr. Smith", status: "approved", date: "Mar 11, 2025" },
        { role: "Warden", name: "Mr. Johnson", status: "rejected", date: "Mar 12, 2025" },
        { role: "HOD", name: "Prof. Williams", status: "pending", date: "-" },
      ],
      rejectionReason: "Insufficient notice period provided.",
    },
  ];

  // Apply filters and search
  const filteredGatepasses = gatepasses.filter((gatepass) => {
    const statusMatch = filter === "all" || gatepass.status === filter;
    const searchMatch =
      searchQuery === "" ||
      gatepass.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gatepass.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gatepass.fromDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gatepass.toDate.toLowerCase().includes(searchQuery.toLowerCase());

    return statusMatch && searchMatch;
  });

  return (
    <DashboardLayout
      userName={userName}
      userRole={userRole}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Gatepass History</h1>

        <Card>
          <CardHeader>
            <CardTitle>Your Gatepass Records</CardTitle>
            <CardDescription>
              View the history and status of your gatepass requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Requests</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search gatepass"
                    className="pl-10 w-full md:w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Button className="bg-hostel-primary hover:bg-hostel-primary/90 w-full md:w-auto">
                Export History
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>From Date</TableHead>
                  <TableHead>To Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGatepasses.length > 0 ? (
                  filteredGatepasses.map((gatepass) => (
                    <TableRow key={gatepass.id}>
                      <TableCell className="font-medium">{gatepass.id}</TableCell>
                      <TableCell>{gatepass.requestDate}</TableCell>
                      <TableCell>{gatepass.fromDate}</TableCell>
                      <TableCell>{gatepass.toDate}</TableCell>
                      <TableCell>
                        {gatepass.reason.length > 30
                          ? `${gatepass.reason.substring(0, 30)}...`
                          : gatepass.reason}
                      </TableCell>
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
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedGatepass(gatepass)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No gatepass history found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {selectedGatepass && (
        <Dialog open={!!selectedGatepass} onOpenChange={() => setSelectedGatepass(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Gatepass Details - {selectedGatepass.id}</DialogTitle>
              <DialogDescription>
                Complete information about this gatepass request
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Request Date</h3>
                  <p>{selectedGatepass.requestDate}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Status</h3>
                  <Badge
                    variant={
                      selectedGatepass.status === "approved"
                        ? "default"
                        : selectedGatepass.status === "rejected"
                        ? "destructive"
                        : "outline"
                    }
                  >
                    {selectedGatepass.status === "approved"
                      ? "Approved"
                      : selectedGatepass.status === "rejected"
                      ? "Rejected"
                      : "Pending"}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium mb-1">From Date</h3>
                  <p>{selectedGatepass.fromDate}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">To Date</h3>
                  <p>{selectedGatepass.toDate}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Reason for Leave</h3>
                <p className="text-gray-700">{selectedGatepass.reason}</p>
              </div>

              {selectedGatepass.rejectionReason && (
                <div>
                  <h3 className="font-medium mb-1 text-red-600">Rejection Reason</h3>
                  <p className="text-gray-700">{selectedGatepass.rejectionReason}</p>
                </div>
              )}
              
              <div>
                <h3 className="font-medium mb-2">Approval Flow</h3>
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedGatepass.approvals.map((approval, index) => (
                        <TableRow key={index}>
                          <TableCell>{approval.role}</TableCell>
                          <TableCell>{approval.name}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                approval.status === "approved"
                                  ? "default"
                                  : approval.status === "rejected"
                                  ? "destructive"
                                  : "outline"
                              }
                            >
                              {approval.status.charAt(0).toUpperCase() +
                                approval.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>{approval.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setSelectedGatepass(null)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </DashboardLayout>
  );
};

export default GatepassHistory;
