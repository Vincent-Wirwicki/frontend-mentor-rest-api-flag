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
      <Link href="/about"> About </Link>
      <div className="flex gap-2">
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
        <Button variant={"outline"} size={"icon"}>
          <GitHubIcon />
        </Button>
      </div>
      {/* <p>Night mode</p> */}
    </nav>
  );
}

function GitHubIcon() {
  return (
    <svg
      height="32"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="32"
      data-view-component="true"
      className="fill-foreground scale-90"
      // class="octicon octicon-mark-github v-align-middle color-fg-default"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
    </svg>
  );
}
