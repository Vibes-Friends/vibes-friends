import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
