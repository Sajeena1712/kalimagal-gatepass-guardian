
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  LogOut, 
  User, 
  FileText, 
  Users, 
  Calendar, 
  Settings,
  BarChart
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  userRole: string;
};

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
  roles: string[];
};

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "/dashboard", roles: ["student", "tutor", "warden", "hod", "admin"] },
  { icon: FileText, label: "Gatepass", href: "/gatepass", roles: ["student", "tutor", "warden", "hod"] },
  { icon: Calendar, label: "Gatepass History", href: "/history", roles: ["student", "tutor", "warden", "hod", "admin"] },
  { icon: User, label: "Profile", href: "/profile", roles: ["student", "tutor", "warden", "hod", "admin"] },
  { icon: Users, label: "Room Management", href: "/rooms", roles: ["admin", "warden", "tutor", "hod"] },
  { icon: BarChart, label: "Analytics", href: "/analytics", roles: ["admin", "warden", "hod"] },
  { icon: Settings, label: "Settings", href: "/settings", roles: ["admin"] },
];

const Sidebar = ({ userRole }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-hostel-primary text-white flex flex-col fixed left-0 top-0">
      <div className="p-4 flex items-center justify-center border-b border-white/20">
        <div className="text-center">
          <h1 className="font-bold text-xl">Kalimagal Hostel</h1>
          <p className="text-sm opacity-80">Gatepass System</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems
            .filter(item => item.roles.includes(userRole.toLowerCase()))
            .map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-md transition-colors hover:bg-white/10",
                    location.pathname === item.href
                      ? "bg-white/20 font-medium"
                      : ""
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/20">
        <Link
          to="/logout"
          className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-white/10 text-white"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
