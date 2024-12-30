"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, MessageSquare, Users } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "message",
    content: "New message from Jane Smith",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "team",
    content: "You were added to Design Team",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "system",
    content: "System maintenance scheduled for tonight",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "message",
    content: "New message from Mike Johnson",
    time: "1 day ago",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5" />;
      case "team":
        return <Users className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button onClick={markAllAsRead}>Mark All as Read</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>
            Stay updated with your latest activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="flex items-start space-x-4">
                <div
                  className={`mt-1 ${
                    notification.read ? "text-muted-foreground" : "text-primary"
                  }`}
                >
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm ${
                      notification.read
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {notification.content}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && <Badge variant="secondary">New</Badge>}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
