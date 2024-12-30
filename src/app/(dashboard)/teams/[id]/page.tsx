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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This would typically come from an API or database
const teamData = {
  id: "1",
  name: "Design Team",
  description:
    "Responsible for all design aspects of our products and marketing materials.",
  members: [
    {
      id: "1",
      name: "Jane Smith",
      role: "Lead Designer",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "2",
      name: "Mike Johnson",
      role: "UI Designer",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "3",
      name: "Emily Brown",
      role: "UX Designer",
      avatar: "https://github.com/shadcn.png",
    },
  ],
  projects: [
    { id: "1", name: "Website Redesign", status: "In Progress" },
    { id: "2", name: "Mobile App UI", status: "Planning" },
    { id: "3", name: "Brand Guidelines Update", status: "Completed" },
  ],
};

export default function TeamPage() {
  const params = useParams();
  const [team, setTeam] = useState(teamData);

  useEffect(() => {
    // In a real application, you would fetch the team data here
    // based on the id from params.id
    console.log("Fetching team with id:", params.id);
  }, [params.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{team.name}</h1>
        <Button>Edit Team</Button>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Team Details</CardTitle>
          <CardDescription>{team.description}</CardDescription>
        </CardHeader>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.members.map((member) => (
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
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {team.projects.map((project) => (
              <li
                key={project.id}
                className="flex justify-between items-center"
              >
                <Link
                  href={`/dashboard/projects/${project.id}`}
                  className="hover:underline"
                >
                  {project.name}
                </Link>
                <span className="text-sm text-muted-foreground">
                  {project.status}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="mt-6">
        <Link href="/dashboard/teams">
          <Button variant="outline">Back to Teams</Button>
        </Link>
      </div>
    </div>
  );
}
