import React from "react";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  );
} 