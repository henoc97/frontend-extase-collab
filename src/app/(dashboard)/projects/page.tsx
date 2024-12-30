import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  // In a real application, you would fetch projects from an API or database
  const projects = [
    {
      id: 1,
      name: "Web Development",
      description: "Building a new website",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Marketing Campaign",
      description: "Q3 marketing initiative",
      status: "Planning",
    },
    {
      id: 3,
      name: "Mobile App",
      description: "iOS and Android app development",
      status: "On Hold",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <Link href="/projects/new">
          <Button>Create New Project</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.name}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">
                {project.status}
              </span>
              <Link href={`/projects/${project.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
