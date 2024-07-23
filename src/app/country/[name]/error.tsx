"use client";
// Error components must be Client Components from Next Js doc
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // console.log(error);
    // Log the error to an error reporting service  Cannot read properties of undefined (reading 'lat')
  }, [error]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen p-5 flex flex-col justify-center items-center overflow-hidden">
      <div>
        <p>Cant find the country </p>
        <p>Something went wrong</p>
        <Link href="/" className="underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
