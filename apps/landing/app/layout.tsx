import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibes Friends - AI & Vibe Coding Community",
  description:
    "A community for AI and vibe coding enthusiasts. Share builds, learnings, content, participate in events and have fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
