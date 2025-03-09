import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-semibold text-2xl mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Don&apos;t worry, sometimes the data get&apos;s lost.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <Link
            href={"/"}
            className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          If you believe this is a mistake, please contact our support team.
        </footer>
      </div>
    </div>
  );
}

export default NotFound;
