
import React from "react";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-hostel-primary md:w-1/2 p-8 flex items-center justify-center hostel-gradient">
        <div className="max-w-md text-white">
          <h1 className="text-3xl font-bold mb-6">Kovai Kalimagal Hostel</h1>
          <h2 className="text-2xl font-semibold mb-4">Gatepass Management System</h2>
          <p className="mb-6 opacity-90">
            A secure and efficient system to manage student gatepasses, 
            enhancing safety and simplifying the approval process.
          </p>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Streamlined gatepass approvals</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Real-time notifications</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Room management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Comprehensive analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
