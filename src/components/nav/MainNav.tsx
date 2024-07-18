"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function MainNav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="bg-element fixed top-0 left-0 z-10 h-16 px-60 w-screen 
    flex justify-between items-center 
    xl:px-40 lg:px-40 md:px-10 sm:px-5 xs:px-5"
    >
      <Link href="/">
        <h1>Where in the World ?</h1>
      </Link>
      {theme === "light" ? (
        <Button
          variant="outline"
          size={"icon"}
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size={"icon"}
          onClick={() => setTheme("light")}
        >
          {" "}
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      )}
      {/* <p>Night mode</p> */}
    </nav>
  );
}
