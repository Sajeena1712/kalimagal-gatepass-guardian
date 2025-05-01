
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Generate mock room data
const generateMockRooms = () => {
  const blocks = ["A", "B", "C"];
  const floors = [1, 2, 3];
  const roomsPerFloor = 8;
  const beds = 4;
  
  const allRooms = [];
  
  for (const block of blocks) {
    for (const floor of floors) {
      for (let room = 1; room <= roomsPerFloor; room++) {
        const roomNumber = `${block}-${floor}${room < 10 ? '0' + room : room}`;
        const occupants = [];
        
        // Randomly decide how many beds are occupied (0 to 4)
        const occupiedBeds = Math.floor(Math.random() * (beds + 1));
        
        for (let bed = 1; bed <= beds; bed++) {
          if (bed <= occupiedBeds) {
            const studentId = Math.floor(10000 + Math.random() * 90000).toString();
            occupants.push({
              name: `Student ${studentId}`,
              id: studentId,
              department: ["CSE", "ECE", "ME", "CE", "EEE"][Math.floor(Math.random() * 5)],
              year: [1, 2, 3, 4][Math.floor(Math.random() * 4)]
            });
          } else {
            occupants.push(null); // Empty bed
          }
        }
        
        allRooms.push({
          id: roomNumber,
          block,
          floor,
          roomNumber,
          occupants
        });
      }
    }
  }
  
  return allRooms;
};

const rooms = generateMockRooms();

const RoomManagement = () => {
  const [selectedBlock, setSelectedBlock] = useState("all");
  const [selectedFloor, setSelectedFloor] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter rooms based on selected criteria
  const filteredRooms = rooms.filter(room => {
    const blockMatch = selectedBlock === "all" || room.block === selectedBlock;
    const floorMatch = selectedFloor === "all" || room.floor === parseInt(selectedFloor);
    const searchMatch = 
      searchQuery === "" || 
      room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.occupants.some(student => 
        student && student.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return blockMatch && floorMatch && searchMatch;
  });
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Room Management</CardTitle>
          <CardDescription>
            View and manage room allocations across the hostel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              <div>
                <Select
                  value={selectedBlock}
                  onValueChange={setSelectedBlock}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Block" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Blocks</SelectItem>
                    <SelectItem value="A">Block A</SelectItem>
                    <SelectItem value="B">Block B</SelectItem>
                    <SelectItem value="C">Block C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select
                  value={selectedFloor}
                  onValueChange={setSelectedFloor}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Floor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Floors</SelectItem>
                    <SelectItem value="1">Floor 1</SelectItem>
                    <SelectItem value="2">Floor 2</SelectItem>
                    <SelectItem value="3">Floor 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search rooms or students"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button className="bg-hostel-primary hover:bg-hostel-primary/90 whitespace-nowrap">
              Generate Report
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{room.roomNumber}</CardTitle>
                    <Badge variant={room.occupants.some(o => o === null) ? "outline" : "secondary"}>
                      {room.occupants.filter(o => o !== null).length}/4
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {room.occupants.map((student, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={`border rounded-md p-3 h-20 flex items-center justify-center text-center ${
                                student ? "bg-hostel-light" : "bg-gray-50 border-dashed"
                              }`}
                            >
                              {student ? (
                                <div className="overflow-hidden text-sm">
                                  <p className="font-medium truncate">{student.name}</p>
                                  <p className="text-xs text-gray-500 truncate">{student.department}, Year {student.year}</p>
                                </div>
                              ) : (
                                <span className="text-sm text-gray-400">Vacant</span>
                              )}
                            </div>
                          </TooltipTrigger>
                          {student && (
                            <TooltipContent>
                              <div className="text-sm">
                                <p><strong>Name:</strong> {student.name}</p>
                                <p><strong>ID:</strong> {student.id}</p>
                                <p><strong>Department:</strong> {student.department}</p>
                                <p><strong>Year:</strong> {student.year}</p>
                              </div>
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No rooms match the selected criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomManagement;
