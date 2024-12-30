import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Tasks() {
  // In a real application, you would fetch tasks from an API or database
  const tasks = [
    {
      id: 1,
      title: "Design homepage",
      priority: "Urgent",
      status: "In Progress",
      dueDate: "2023-07-15",
    },
    {
      id: 2,
      title: "Implement user authentication",
      priority: "Normal",
      status: "Pending",
      dueDate: "2023-07-20",
    },
    {
      id: 3,
      title: "Write API documentation",
      priority: "Low",
      status: "Completed",
      dueDate: "2023-07-10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
        <Link href="/tasks/new">
          <Button>Create New Task</Button>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{task.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/tasks/${task.id}`}>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
