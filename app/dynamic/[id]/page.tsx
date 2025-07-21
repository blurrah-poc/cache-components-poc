
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";
import { Suspense, cache } from "react";


interface PurchaseOrderDetailsProps {
  params: Promise<{ id: string }>;
}

const PostLoader = cache(async ({ id }: { id: Promise<string> }) => {
  "use cache: remote";
  unstable_cacheLife("hours");
  unstable_cacheTag(`post-${id}`);
  // Sleep for 4 seconds to simulate a slow operation
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const resolvedId = await id;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${resolvedId}`
  );
  return (
    <h1 className="text-2xl font-bold mb-4">
      Post Details: {resolvedId} -{" "}
      {post.ok ? (await post.json()).title : "Error"}
    </h1>
  );
});

export default async function PostPage({ params }: PurchaseOrderDetailsProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-[90%] bg-blue-900 text-white p-4 rounded-lg mb-4 flex items-center justify-center">
        Welcome to the post detail page!
      </div>
      <Suspense fallback={<div>Loading post...</div>}>
        <PostLoader id={params.then((p) => p.id)} />
      </Suspense>
    </div>
  );
}