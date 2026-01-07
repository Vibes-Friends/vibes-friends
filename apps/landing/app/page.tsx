import { Button } from "@vibes/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Vibes Friends</h1>
        <p className="text-xl text-muted-foreground">
          A community for AI and vibe coding enthusiasts. Share builds, learnings, content,
          participate in events and have fun.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Join Community</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}
