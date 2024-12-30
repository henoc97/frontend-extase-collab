"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// This would typically come from an API or database
const projectData = {
  id: "1",
  name: "Website Redesign",
  description:
    "Redesigning the company website to improve user experience and conversion rates.",
  status: "In Progress",
  progress: 65,
  startDate: "2023-06-01",
  endDate: "2023-08-31",
  team: [
    {
      id: "1",
      name: "John Doe",
      role: "Project Manager",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "Lead Designer",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "Frontend Developer",
      avatar: "https://github.com/shadcn.png",
    },
  ],
  tasks: [
    { id: "1", name: "Design Homepage", status: "Completed" },
    { id: "2", name: "Implement Responsive Layout", status: "In Progress" },
    { id: "3", name: "Optimize Images", status: "To Do" },
  ],
};

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState(projectData);

  useEffect(() => {
    // In a real application, you would fetch the project data here
    // based on the id from params.id
    console.log("Fetching project with id:", params.id);
  }, [params.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Badge
          variant={
            project.status === "Completed"
              ? "success"
              : project.status === "In Progress"
              ? "warning"
              : "default"
          }
        >
          {project.status}
        </Badge>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Start Date</p>
              <p>{project.startDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium">End Date</p>
              <p>{project.endDate}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Progress</p>
            <Progress value={project.progress} className="w-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {project.team.map((member) => (
              <div key={member.id} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center">
                <span>{task.name}</span>
                <Badge
                  variant={
                    task.status === "Completed"
                      ? "success"
                      : task.status === "In Progress"
                      ? "warning"
                      : "default"
                  }
                >
                  {task.status}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="mt-6">
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    </div>
  );
}
