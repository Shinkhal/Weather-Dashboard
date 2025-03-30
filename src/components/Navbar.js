"use client";
import { CloudSun } from "lucide-react";
import ThemeToggle from "./Theme"

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-800 p-4 flex items-center justify-between px-6 transition-all">
      <div className="flex items-center space-x-3">
        <CloudSun className="text-yellow-500 w-8 h-8" />
        <h1 className="text-gray-900 dark:text-white text-2xl font-bold tracking-wide">
          Weather Dashboard
        </h1>
      </div>
      <ThemeToggle />
    </nav>
  );
}
