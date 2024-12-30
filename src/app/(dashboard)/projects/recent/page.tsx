import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// This would typically come from an API or database
const recentProjects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    lastUpdated: "2023-07-01",
    team: "Design Team",
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "Planning",
    lastUpdated: "2023-06-28",
    team: "Dev Team",
  },
  {
    id: 3,
    name: "Q3 Marketing Campaign",
    status: "In Progress",
    lastUpdated: "2023-06-25",
    team: "Marketing Team",
  },
  {
    id: 4,
    name: "Customer Survey Analysis",
    status: "Completed",
    lastUpdated: "2023-06-20",
    team: "Research Team",
  },
  {
    id: 5,
    name: "New Product Launch",
    status: "Planning",
    lastUpdated: "2023-06-15",
    team: "Product Team",
  },
];

export default function RecentProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recent Projects</h1>
        <Link href="/projects/new">
          <Button>Create New Project</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>{project.lastUpdated}</TableCell>
              <TableCell>{project.team}</TableCell>
              <TableCell>
                <Link href={`/projects/${project.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
