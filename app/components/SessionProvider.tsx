"use client";

import {SessionProvider} from "next-auth/react";

interface IChildren {
    children: React.ReactNode;
}


const SessionProviderWrapper = ({children} : IChildren) => {
  return (
    <div>
        <SessionProvider>
      {children}

        </SessionProvider>
    </div>
  )
}

export default SessionProviderWrapper;
