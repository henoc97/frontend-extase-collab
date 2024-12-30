import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Teams() {
  // In a real application, you would fetch teams from an API or database
  const teams = [
    { id: 1, name: "Development Team", members: 5, projects: 3 },
    { id: 2, name: "Design Team", members: 3, projects: 2 },
    { id: 3, name: "Marketing Team", members: 4, projects: 1 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Teams</h1>
        <Link href="/teams/new">
          <Button>Create New Team</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${team.name}`}
                />
                <AvatarFallback>
                  {team.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold text-gray-800">
                {team.name}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">Members: {team.members}</p>
            <p className="text-gray-600 mb-4">
              Active Projects: {team.projects}
            </p>
            <Link href={`/teams/${team.id}`}>
              <Button variant="outline" className="w-full">
                View Team
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
