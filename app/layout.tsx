import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { SessionProvider, useSession } from "next-auth/react";
import { auth } from "@/auth";

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
