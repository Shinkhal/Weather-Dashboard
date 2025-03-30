"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-950 text-gray-800 dark:text-gray-300 py-6 mt-auto shadow-md text-center transition-all">
      <p className="text-sm">&copy; {new Date().getFullYear()} Shinkhal Sinha. All Rights Reserved.</p>
    </footer>
  );
}
