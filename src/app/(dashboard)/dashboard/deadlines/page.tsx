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
const upcomingDeadlines = [
  {
    id: 1,
    taskName: "Complete Website Mockups",
    projectName: "Website Redesign",
    dueDate: "2023-07-15",
    assignee: "John Doe",
  },
  {
    id: 2,
    taskName: "Finalize App Features",
    projectName: "Mobile App Development",
    dueDate: "2023-07-20",
    assignee: "Jane Smith",
  },
  {
    id: 3,
    taskName: "Launch Email Campaign",
    projectName: "Q3 Marketing Campaign",
    dueDate: "2023-07-25",
    assignee: "Mike Johnson",
  },
  {
    id: 4,
    taskName: "Present Survey Results",
    projectName: "Customer Survey Analysis",
    dueDate: "2023-07-30",
    assignee: "Emily Brown",
  },
  {
    id: 5,
    taskName: "Finalize Product Specs",
    projectName: "New Product Launch",
    dueDate: "2023-08-05",
    assignee: "Chris Wilson",
  },
];

export default function UpcomingDeadlinesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Upcoming Deadlines</h1>
        <Link href="/tasks/new">
          <Button>Create New Task</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task Name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {upcomingDeadlines.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.taskName}</TableCell>
              <TableCell>{task.projectName}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    new Date(task.dueDate) <= new Date()
                      ? "destructive"
                      : "default"
                  }
                >
                  {task.dueDate}
                </Badge>
              </TableCell>
              <TableCell>{task.assignee}</TableCell>
              <TableCell>
                <Link href={`/tasks/${task.id}`}>
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
