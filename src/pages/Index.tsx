
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Bell, 
  Home, 
  FileText,
  Bed,
  Building,
  Map,
  Phone
} from "lucide-react";

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

      {/* Hero Section with Animation */}
      <section className="flex-1 relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hostel Gatepass Management System
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Your digital solution for secure campus living. Streamlined gatepass approvals, 
              real-time notifications, and enhanced student safety.
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
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Hostel Building"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Kovai Kalimagal Hostel</h3>
                  <p className="text-gray-600">A home away from home for students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated patterns */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/4 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Address Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-hostel-primary">
            Visit Our Campus
          </h2>
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <div className="flex items-start space-x-3 mb-6">
                  <Building className="h-6 w-6 text-hostel-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Kovai Kalimagal Hostel</h3>
                    <p className="text-gray-600">A premier residential facility for students</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Map className="h-5 w-5 text-hostel-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 College Road<br />
                        Saravanampatti, Coimbatore<br />
                        Tamil Nadu 641035, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-hostel-primary mt-1" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-gray-600">
                        Phone: +91 98765 43210<br />
                        Email: info@kalimagalhostel.edu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Home className="h-5 w-5 text-hostel-primary mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">
                        Monday to Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/about">
                    <Button className="bg-hostel-primary hover:bg-hostel-primary/90">
                      View More Details
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-200 min-h-[300px] relative overflow-hidden">
                {/* Placeholder for Google Maps - in a real implementation, this would be an actual map */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Campus Map Image
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="College Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-hostel-primary">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Digital Gatepass",
                description:
                  "Apply for and manage gatepasses digitally, eliminating paper-based processes.",
              },
              {
                title: "Approval Workflow",
                icon: ShieldCheck,
                description:
                  "Structured approval flow from parents to tutors, wardens, and HODs.",
              },
              {
                icon: Bed,
                title: "Room Management",
                description:
                  "Visual room allocation system for efficient hostel management.",
              },
              {
                icon: Bell,
                title: "Real-time Notifications",
                description:
                  "Get instant updates on gatepass status changes.",
              },
              {
                title: "Analytics Dashboard",
                icon: FileText,
                description:
                  "Comprehensive insights into gatepass patterns and trends.",
              },
              {
                title: "Role-based Access",
                icon: ShieldCheck,
                description:
                  "Secure access controls for students, tutors, wardens, HODs, and admin.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-hostel-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-hostel-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Hostel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-hostel-primary to-hostel-secondary rounded-lg blur opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kovai Kalimagal Hostel"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto relative"
                />
              </div>
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
                state-of-the-art facilities including:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hostel-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-hostel-primary"></div>
                  </div>
                  <span>Modern, well-furnished rooms with attached bathrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hostel-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-hostel-primary"></div>
                  </div>
                  <span>Hygienic dining hall with nutritious meals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hostel-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-hostel-primary"></div>
                  </div>
                  <span>High-speed Wi-Fi internet connectivity</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hostel-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-hostel-primary"></div>
                  </div>
                  <span>24/7 security with CCTV surveillance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-hostel-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-hostel-primary"></div>
                  </div>
                  <span>Recreation facilities including gym and indoor games</span>
                </li>
              </ul>
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-hostel-primary">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
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
