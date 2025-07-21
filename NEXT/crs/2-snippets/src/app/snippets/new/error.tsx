"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function ErrorPage({ error }: ErrorPageProps) {
  return <div className="bg-red-300 ">{error.message}</div>;
}

export default ErrorPage;
