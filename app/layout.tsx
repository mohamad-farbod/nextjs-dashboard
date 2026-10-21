import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { SessionProvider, useSession } from "next-auth/react";
import { auth } from "@/auth";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log({ session });

  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
