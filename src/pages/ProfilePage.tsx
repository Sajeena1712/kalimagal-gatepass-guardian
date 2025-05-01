import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Shield, UserCog, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ProfilePage = () => {
  // In a real app, this would come from your authentication context
  const userRole = localStorage.getItem('userRole') || "student";
  const userName = localStorage.getItem('userName') || "John Student";
  const { toast } = useToast();

  // Mock student data
  const student = {
    name: "John Student",
    rollNumber: "CS2023001",
    department: "Computer Science & Engineering",
    year: 3,
    email: "john.student@example.edu",
    phone: "+91 9876543210",
    room: "B-204",
    address: "123 Main Street, Chennai, Tamil Nadu",
    parentName: "Robert Student",
    parentPhone: "+91 9876543211",
    parentEmail: "robert.student@example.com",
    dateOfBirth: "2001-05-15",
    bloodGroup: "O+",
    emergencyContact: "+91 9876543212",
  };

  // Updated: Only warden can edit profiles
  const isEditable = userRole === "warden";

  const handleUpdate = () => {
    if (!isEditable) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to update profile. Please contact the warden.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Profile Updated",
      description: "Profile details have been updated successfully.",
    });
  };

  return (
    <DashboardLayout userName={userName} userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          {!isEditable && (
            <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-md flex items-center space-x-2">
              <Shield size={16} />
              <span className="text-sm">Profile can only be edited by the warden</span>
            </div>
          )}
          {isEditable && (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center space-x-2">
              <UserCog size={16} />
              <span className="text-sm">You have permission to edit profiles</span>
            </div>
          )}
        </div>

        {userRole !== "warden" && (
          <Alert variant="default" className="bg-blue-50 border-blue-200">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-700">
              Only the warden can modify profile information. Please contact the warden for any changes.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your personal and contact details</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-hostel-primary text-white text-2xl">
                  {userName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{student.name}</h2>
              <p className="text-gray-500 mb-2">{student.rollNumber}</p>
              <p className="text-gray-500">{student.department}</p>
              <p className="text-gray-500 mb-6">Year {student.year}</p>

              <div className="grid grid-cols-1 gap-4 w-full text-left">
                <div>
                  <Label className="text-xs text-gray-500">Email</Label>
                  <p className="text-sm">{student.email}</p>
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Phone</Label>
                  <p className="text-sm">{student.phone}</p>
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Room Number</Label>
                  <p className="text-sm">{student.room}</p>
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Date of Birth</Label>
                  <p className="text-sm">{student.dateOfBirth}</p>
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Blood Group</Label>
                  <p className="text-sm">{student.bloodGroup}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="parent">Parent Info</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={student.name} 
                        readOnly 
                        className="bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roll">Roll Number</Label>
                      <Input 
                        id="roll" 
                        value={student.rollNumber} 
                        readOnly 
                        className="bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        defaultValue={student.email} 
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        defaultValue={student.phone} 
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      defaultValue={student.address} 
                      readOnly={!isEditable}
                      disabled={!isEditable}
                      className={!isEditable ? "bg-gray-50" : ""}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="blood">Blood Group</Label>
                      <Input 
                        id="blood" 
                        defaultValue={student.bloodGroup}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input 
                        id="emergency" 
                        defaultValue={student.emergencyContact}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input 
                        id="dob" 
                        defaultValue={student.dateOfBirth}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      className={isEditable ? "bg-hostel-primary hover:bg-hostel-primary/90" : "bg-gray-400"}
                      onClick={handleUpdate}
                      disabled={!isEditable}
                    >
                      Update Profile
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="parent" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent's Name</Label>
                      <Input 
                        id="parentName" 
                        defaultValue={student.parentName}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Parent's Phone</Label>
                      <Input 
                        id="parentPhone" 
                        defaultValue={student.parentPhone}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentEmail">Parent's Email</Label>
                      <Input 
                        id="parentEmail" 
                        defaultValue={student.parentEmail}
                        readOnly={!isEditable}
                        disabled={!isEditable}
                        className={!isEditable ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className={isEditable ? "bg-hostel-primary hover:bg-hostel-primary/90" : "bg-gray-400"}
                      onClick={handleUpdate}
                      disabled={!isEditable}
                    >
                      Update Parent Info
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="password" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current">Current Password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new">New Password</Label>
                      <Input id="new" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm">Confirm New Password</Label>
                      <Input id="confirm" type="password" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      className="bg-hostel-primary hover:bg-hostel-primary/90"
                      onClick={() => toast({
                        title: "Password Updated",
                        description: "Your password has been successfully updated."
                      })}
                    >
                      Change Password
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
