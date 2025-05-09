import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  reason: z.string().min(10, {
    message: "Reason must be at least 10 characters.",
  }),
  fromDate: z.date({
    required_error: "From date is required.",
  }),
  toDate: z.date({
    required_error: "To date is required.",
  }),
  contactNumber: z.string().min(10, {
    message: "Contact number must be at least 10 characters.",
  }),
  destination: z.string().min(3, {
    message: "Destination must be at least 3 characters.",
  }),
  parentName: z.string().min(3, {
    message: "Parent's name is required.",
  }),
  parentContact: z.string().min(10, {
    message: "Parent's contact number is required.",
  }),
});

const GatepassForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
      contactNumber: "",
      destination: "",
      parentName: "",
      parentContact: "",
    },
  });
  
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would submit to your backend
    console.log(values);
    
    // Send notification toast
    toast({
      title: "Gatepass Request Submitted",
      description: "Your request has been sent to your parent for approval.",
      variant: "default",
    });
    
    // Simulate parent notification
    setTimeout(() => {
      toast({
        title: "Parent Notified",
        description: "SMS notification sent to " + values.parentContact,
        variant: "default",
      });
      
      // Simulate parent approval
      setTimeout(() => {
        toast({
          title: "Parent Approved",
          description: "Your gatepass request has been approved by your parent.",
          variant: "default",
        });
        
        // Simulate tutor review
        setTimeout(() => {
          toast({
            title: "Tutor Review",
            description: "Your gatepass request is being reviewed by your tutor.",
            variant: "default",
          });
        }, 3000);
      }, 5000);
    }, 3000);
    
    // Here you would redirect to the gatepass status page or dashboard
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -z-10 inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fromDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>From Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          // Fix: Compare timestamps instead of Date object with number
                          const today = new Date();
                          const twoMonthsLater = new Date();
                          twoMonthsLater.setMonth(today.getMonth() + 2);
                          
                          return date < today || date > twoMonthsLater;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    The date you plan to leave the hostel.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>To Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          // Fix: Compare with proper date objects
                          const fromDate = form.getValues("fromDate") || new Date();
                          
                          // Create proper date for comparison
                          const twoMonthsLater = new Date();
                          twoMonthsLater.setMonth(new Date().getMonth() + 2);
                          
                          return date < fromDate || date > twoMonthsLater;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    The date you plan to return to the hostel.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Where are you going?" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide the address of your destination.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your contact number during the leave period.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Parent's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent's Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Parent's phone number" {...field} />
                  </FormControl>
                  <FormDescription>
                    A notification will be sent to this number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Leave</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide a detailed reason for your gatepass request"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Be specific about why you need to leave the hostel.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="bg-hostel-primary hover:bg-hostel-primary/90">
              Submit Gatepass Request
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GatepassForm;
