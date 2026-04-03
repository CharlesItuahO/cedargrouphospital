"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [appointmentStatus, setAppointmentStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [messageStatus, setMessageStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleAppointmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppointmentStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      department: formData.get("department"),
    };

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Failed to submit');
      
      setAppointmentStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setAppointmentStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setAppointmentStatus("idle");
      alert("Failed to book appointment. Please check database connection.");
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Failed to submit');
      
      setMessageStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setMessageStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setMessageStatus("idle");
      alert("Failed to send message. Please check database connection.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with us for inquiries or book an appointment online. We are available 24/7.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our team is ready to assist you. Reach out to us via phone, email, or visit our hospital.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
                    <p className="text-gray-600">Off 2nd Avenue, 208 D Close, Festac Town, Lagos 102102, Lagos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                    <p className="text-gray-600">07045669178</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Operating Hours</h3>
                    <p className="text-gray-600">Open 24 hours, 7 days a week</p>
                    <span className="inline-block mt-1 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">24/7 Emergency Available</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden relative mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.382068940801!2d3.2766!3d6.4731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0000000000%3A0x0!2zNsKwMjgnMjMuMiJOIDPCsDE2JzM1LjgiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Appointment Form */}
              <Card id="appointment" className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
                  {appointmentStatus === "success" ? (
                    <div className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" />
                      <p className="font-medium">Your appointment request has been submitted successfully. We will contact you shortly to confirm.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="app-name">Full Name</Label>
                          <Input id="app-name" name="name" required placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="app-phone">Phone Number</Label>
                          <Input id="app-phone" name="phone" required placeholder="07045669178" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="app-date">Preferred Date</Label>
                          <Input id="app-date" name="date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="app-dept">Department</Label>
                          <select 
                            id="app-dept" 
                            name="department" 
                            required 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select Department</option>
                            <option value="General Medicine">General Medicine</option>
                            <option value="Paediatrics">Paediatrics</option>
                            <option value="Surgery">Surgery</option>
                            <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
                            <option value="Renal Dialysis">Renal Dialysis</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={appointmentStatus === "submitting"}>
                        {appointmentStatus === "submitting" ? "Submitting..." : "Book Appointment"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  {messageStatus === "success" ? (
                    <div className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" />
                      <p className="font-medium">Your message has been sent successfully. We will get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleMessageSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="msg-name">Full Name</Label>
                          <Input id="msg-name" name="name" required placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="msg-phone">Phone Number</Label>
                          <Input id="msg-phone" name="phone" required placeholder="07045669178" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="msg-message">Message</Label>
                        <Textarea id="msg-message" name="message" required placeholder="How can we help you?" rows={5} />
                      </div>
                      <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white" disabled={messageStatus === "submitting"}>
                        {messageStatus === "submitting" ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
