import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Friends - AI & Vibe Coding Community",
  description:
    "A community for AI and vibe coding enthusiasts. Share builds, learnings, content, participate in events and have fun.",
  openGraph: {
    title: "Vibe Friends - AI & Vibe Coding Community",
    description:
      "A community for AI and vibe coding enthusiasts. Share builds, learnings, content, participate in events and have fun.",
    images: ["/preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Friends - AI & Vibe Coding Community",
    description:
      "A community for AI and vibe coding enthusiasts. Share builds, learnings, content, participate in events and have fun.",
    images: ["/preview.png"],
  },
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
