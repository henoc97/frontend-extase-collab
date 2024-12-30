"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewTeamPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/teams");
    }, 3000);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Team</h1>
      <form onSubmit={onSubmit} className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <Label htmlFor="name">Team Name</Label>
          <Input id="name" placeholder="Enter team name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter team description" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="members">Team Members (comma-separated emails)</Label>
          <Input
            id="members"
            placeholder="john@example.com, jane@example.com"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Team"}
        </Button>
      </form>
    </div>
  );
}
