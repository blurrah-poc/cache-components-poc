import React, { Suspense } from "react";

const Loader = async () => {
  "use cache";
  // Simulate a slow operation
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Get random json data from a public API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("==> Data fetched from API");
  const data = await res.json();
  console.log("==> Data fetched:", data);
  return <div>{data.title}</div>;
};

const Page = () => {
  return (
    <div>
      Page
      <Suspense fallback={<div>Loading...</div>}>
        <Loader />
      </Suspense>
    </div>
  );
};

export default Page;