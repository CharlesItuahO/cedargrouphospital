"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, LogOut, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("cedar_admin_auth");
    if (!isAuth) {
      router.push("/admin");
      return;
    }

    const fetchData = async () => {
      try {
        const [appRes, msgRes] = await Promise.all([
          fetch('/api/appointments'),
          fetch('/api/messages')
        ]);

        if (appRes.ok) {
          const appData = await appRes.json();
          if (Array.isArray(appData)) setAppointments(appData);
        }
        if (msgRes.ok) {
          const msgData = await msgRes.json();
          if (Array.isArray(msgData)) setMessages(msgData);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("cedar_admin_auth");
    router.push("/admin");
  };

  const updateAppointmentStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/appointments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status } : app));
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setMessages(messages.map(msg => msg.id === id ? { ...msg, status } : msg));
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage appointments and patient messages</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Appointments
              {appointments.filter(a => a.status === 'pending').length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {appointments.filter(a => a.status === 'pending').length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messages
              {messages.filter(m => m.status === 'unread').length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {messages.filter(m => m.status === 'unread').length}
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-4">
            {appointments.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center text-gray-500">
                  No appointments found.
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {appointments.map((app) => (
                  <Card key={app.id} className={app.status === 'pending' ? 'border-l-4 border-l-blue-500' : ''}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                            <p><span className="font-medium text-gray-900">Phone:</span> {app.phone}</p>
                            <p><span className="font-medium text-gray-900">Date:</span> {app.date}</p>
                            <p><span className="font-medium text-gray-900">Department:</span> {app.department}</p>
                            <p><span className="font-medium text-gray-900">Requested:</span> {new Date(app.createdAt).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {app.status === 'pending' ? (
                            <Button onClick={() => updateAppointmentStatus(app.id, 'confirmed')} className="bg-green-600 hover:bg-green-700 text-white">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Confirm
                            </Button>
                          ) : (
                            <Button onClick={() => updateAppointmentStatus(app.id, 'pending')} variant="outline">
                              <Clock className="w-4 h-4 mr-2" />
                              Mark Pending
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            {messages.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center text-gray-500">
                  No messages found.
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {messages.map((msg) => (
                  <Card key={msg.id} className={msg.status === 'unread' ? 'border-l-4 border-l-blue-500' : ''}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{msg.name}</h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              msg.status === 'unread' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {msg.status.charAt(0).toUpperCase() + msg.status.slice(1)}
                            </span>
                          </div>
                          <div className="flex gap-4 text-sm text-gray-600 mb-4">
                            <p><span className="font-medium text-gray-900">Phone:</span> {msg.phone}</p>
                            <p><span className="font-medium text-gray-900">Received:</span> {new Date(msg.createdAt).toLocaleString()}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg text-gray-800 whitespace-pre-wrap">
                            {msg.message}
                          </div>
                        </div>
                        <div className="flex items-start">
                          {msg.status === 'unread' ? (
                            <Button onClick={() => updateMessageStatus(msg.id, 'read')} variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Mark Read
                            </Button>
                          ) : (
                            <Button onClick={() => updateMessageStatus(msg.id, 'unread')} variant="ghost" className="text-gray-500">
                              Mark Unread
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
