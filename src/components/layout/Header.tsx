
import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HeaderProps = {
  userName: string;
  userRole: string;
  notifications?: {
    id: string;
    message: string;
    time: string;
    read: boolean;
  }[];
};

const Header = ({ userName, userRole, notifications = [] }: HeaderProps) => {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <DropdownMenuItem key={notification.id} className={notification.read ? "" : "bg-blue-50"}>
                  <div className="flex flex-col">
                    <span>{notification.message}</span>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </DropdownMenuItem>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-hostel-primary text-white">
                {userName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col text-sm">
              <span className="font-medium">{userName}</span>
              <span className="text-xs text-gray-500 capitalize">{userRole}</span>
            </div>
            <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
