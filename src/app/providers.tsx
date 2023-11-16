

import React from "react";
import { PlayingProvider } from "../context/playing/playing-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <PlayingProvider>{children}</PlayingProvider>;
};

export default Providers;
