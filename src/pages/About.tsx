
import React from "react";
import { Link } from "react-router-dom";
import { 
  Bed, 
  Utensils, 
  Wifi, 
  Activity, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight,
  Map,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const facilities = [
    {
      icon: Bed,
      title: "Comfortable Accommodation",
      description: "Well-ventilated rooms with modern furniture designed for students' comfort and study needs."
    },
    {
      icon: Utensils,
      title: "Nutritious Food",
      description: "Three-time meals with balanced nutrition, prepared in hygienic conditions with varied menu options."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "24/7 high-speed Wi-Fi throughout the hostel premises for academic and personal use."
    },
    {
      icon: Activity,
      title: "Recreation Facilities",
      description: "Indoor and outdoor recreation facilities including gym, sports ground, and common rooms."
    },
    {
      icon: BookOpen,
      title: "Study Environment",
      description: "Dedicated study rooms with peaceful environment for focused learning and group discussions."
    },
    {
      icon: ShieldCheck,
      title: "Security & Safety",
      description: "24-hour security, CCTV surveillance, and biometric access control for maximum student safety."
    }
  ];

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
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hostel-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Our Hostel</h2>
            <p className="text-lg opacity-90 mb-8">
              Kovai Kalimagal Hostel provides a safe, comfortable, and supportive
              living environment for students pursuing higher education in Coimbatore.
              Established in 2005, we have been a second home for thousands of students
              from across India.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-hostel-primary">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-hostel-primary/10 p-3 rounded-full w-fit mb-4">
                  <facility.icon className="h-6 w-6 text-hostel-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-hostel-primary">
              Our Location
            </h2>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Map className="h-5 w-5 text-hostel-primary mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          Kovai Kalimagal Hostel<br />
                          123 College Road<br />
                          Saravanampatti, Coimbatore<br />
                          Tamil Nadu 641035, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-hostel-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-hostel-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@kalimagalhostel.edu</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                <div className="h-64 md:h-auto bg-gray-200 rounded-lg">
                  {/* Placeholder for map - in a real implementation, this would be Google Maps */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Interactive Map Would Be Here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hostel-gradient py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Join Our Hostel?</h3>
          <Link to="/login">
            <Button className="bg-white text-hostel-primary hover:bg-white/90">
              Login to Portal <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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

export default About;
