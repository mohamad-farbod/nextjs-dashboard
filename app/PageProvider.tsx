import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
interface ProvidersProps {
  children: ReactNode;
}
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider refetchOnWindowFocus={true}>{children}</SessionProvider>
  );
};

export default Providers;
