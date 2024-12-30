import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function TaskDetail({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the task details from an API or database
  const task = {
    id: params.id,
    title: "Implement user authentication",
    description:
      "Set up user authentication system using NextAuth.js and integrate with the backend API.",
    priority: "Normal",
    status: "In Progress",
    dueDate: "2023-07-20",
    assignedTo: "John Doe",
    project: "Web Development",
    comments: [
      {
        id: 1,
        author: "Jane Smith",
        content: "I've started working on this. Will update soon.",
        timestamp: "2023-07-10 09:30",
      },
      {
        id: 2,
        author: "John Doe",
        content: "Great, let me know if you need any help!",
        timestamp: "2023-07-10 10:15",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/tasks">
          <Button variant="outline">← Back to Tasks</Button>
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <Badge
            variant={
              task.priority === "Urgent"
                ? "destructive"
                : task.priority === "Normal"
                ? "default"
                : "secondary"
            }
          >
            {task.priority}
          </Badge>
          <Badge variant="outline">{task.status}</Badge>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            Due: {task.dueDate}
          </div>
        </div>
        <p className="text-gray-600 mb-6">{task.description}</p>
        <div className="flex items-center mb-6">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${task.assignedTo}`}
            />
            <AvatarFallback>
              {task.assignedTo
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-700">Assigned to</p>
            <p className="text-sm text-gray-600">{task.assignedTo}</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700">Project</p>
          <p className="text-sm text-gray-600">{task.project}</p>
        </div>
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>
          {task.comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 pb-4 border-b last:border-b-0"
            >
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`}
                  />
                  <AvatarFallback>
                    {comment.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-gray-800">
                  {comment.author}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          ))}
          <div className="mt-4">
            <Button>Add Comment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
