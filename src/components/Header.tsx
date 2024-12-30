import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User, Home, Briefcase, CheckSquare, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-sm backdrop-filter">
      <div className="container flex h-14 items-center bg-transparent">
        <Link className="mr-6 flex items-center space-x-2" href="/dashboard">
          <span className="font-bold text-xl">Extase-Collab</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link
            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
            href="/dashboard"
          >
            <Home className="w-4 h-4 mr-2" />
            Dashboard
          </Link>
          <Link
            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
            href="/projects"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Projects
          </Link>
          <Link
            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
            href="/tasks"
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Tasks
          </Link>
          <Link
            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
            href="/teams"
          >
            <Users className="w-4 h-4 mr-2" />
            Teams
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Input
            className="h-9 md:w-[200px] lg:w-[250px]"
            placeholder="Search..."
            type="search"
          />
          <Link href="/dashboard/notifications">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </Link>
          <Link href="/dashboard/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
