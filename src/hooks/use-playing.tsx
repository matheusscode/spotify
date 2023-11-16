"use client";

import React from "react";
import { PlayingContenxt } from "../context/playing/playing-create";

export const usePlaying = () => {
  const context = React.useContext(PlayingContenxt);
  if (!context) {
    throw new Error("usePlaying must be used within a ToolsProvider");
  }
  return context;
};

export default usePlaying;
