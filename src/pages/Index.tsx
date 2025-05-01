
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-hostel-primary">
              Kovai Kalimagal Hostel
            </h1>
          </div>
          <div>
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Login
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 hostel-gradient">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hostel Gatepass Management System
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Streamlining student safety with our digital gatepass solution.
              Enhanced security, simplified approvals, and real-time notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <Button className="bg-white text-hostel-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg"
              alt="Hostel Gatepass System"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-hostel-primary">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Gatepass",
                description:
                  "Apply for and manage gatepasses digitally, eliminating paper-based processes.",
              },
              {
                title: "Approval Workflow",
                description:
                  "Structured approval flow from parents to tutors, wardens, and HODs.",
              },
              {
                title: "Room Management",
                description:
                  "Visual room allocation system for efficient hostel management.",
              },
              {
                title: "Real-time Notifications",
                description:
                  "Get instant updates on gatepass status changes.",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Comprehensive insights into gatepass patterns and trends.",
              },
              {
                title: "Role-based Access",
                description:
                  "Secure access controls for students, tutors, wardens, HODs, and admin.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Hostel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.svg"
                alt="Kovai Kalimagal Hostel"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-hostel-primary">
                About Kovai Kalimagal Hostel
              </h2>
              <p className="mb-4 text-gray-700">
                Kovai Kalimagal Hostel provides a safe, comfortable, and supportive
                living environment for students. Our hostel features modern
                amenities and a conducive atmosphere for academic excellence.
              </p>
              <p className="mb-6 text-gray-700">
                We prioritize student safety and well-being through our
                state-of-the-art facilities and management systems, including our
                digital gatepass management system.
              </p>
              <Link to="/about">
                <Button className="bg-hostel-primary hover:bg-hostel-primary/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-hostel-primary">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-gray-700">
                  Kovai Kalimagal Hostel<br />
                  123 College Road<br />
                  Coimbatore, Tamil Nadu 641042<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +91 98765 43210
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> info@kalimagalhostel.edu
                </p>
                <p className="text-gray-700">
                  <strong>Office Hours:</strong> 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hostel-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Kovai Kalimagal Hostel. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
