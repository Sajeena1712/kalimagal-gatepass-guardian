
import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-hostel-primary md:w-1/2 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-800"></div>
        
        {/* AI-inspired animated elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Neural network-like pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-md text-white z-10 relative">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold mb-6">Kovai Kalimagal Hostel</h1>
          <h2 className="text-2xl font-semibold mb-4">Gatepass Management System</h2>
          <p className="mb-6 opacity-90">
            A secure and efficient system to manage student gatepasses, 
            enhancing safety and simplifying the approval process.
          </p>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
            <h3 className="font-semibold mb-2">Key Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Enhanced security with AI-powered monitoring</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Real-time parent notifications via SMS</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Transparent multi-level approval workflow</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                <span>Complete history of student movements</span>
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
