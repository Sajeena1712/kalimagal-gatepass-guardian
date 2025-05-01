
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { toast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "student",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - in a real app, this would be an API call
    setTimeout(() => {
      // Demo login - in real app you'd validate credentials
      const demoUsers: Record<string, {name: string, path: string}> = {
        student: { name: "John Student", path: "/dashboard" },
        tutor: { name: "Dr. Smith", path: "/dashboard" },
        warden: { name: "Mr. Johnson", path: "/dashboard" },
        hod: { name: "Prof. Williams", path: "/dashboard" },
        admin: { name: "Admin User", path: "/dashboard" },
      };

      // Store user info in localStorage (for demo purposes)
      const user = demoUsers[formData.role];
      localStorage.setItem("userRole", formData.role);
      localStorage.setItem("userName", user.name);
      
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`,
      });
      
      // Redirect to dashboard
      navigate(user.path);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="role">Login As</Label>
            <Select
              value={formData.role}
              onValueChange={handleRoleChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="tutor">Tutor</SelectItem>
                <SelectItem value="warden">Warden</SelectItem>
                <SelectItem value="hod">HOD</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-hostel-primary hover:bg-hostel-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
