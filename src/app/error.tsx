"use client"; // Error components must be Client Components

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
    console.log(error);
    // Log the error to an error reporting service  Cannot read properties of undefined (reading 'lat')
  }, [error]);

  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center items-center ">
      <div>
        <p>Something went wrong</p>
        <Link href="/" className="underline">
          Go back home
        </Link>
        <p>If the link below dont work</p>
        <p>Just refresh (press f5)</p>
      </div>
    </div>
  );
}
