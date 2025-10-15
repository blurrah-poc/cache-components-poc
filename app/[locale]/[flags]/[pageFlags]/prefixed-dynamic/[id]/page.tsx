import { unstable_cacheLife, unstable_cacheTag } from "next/cache";
import { Suspense } from "react";
import DynamicComponent from "./dynamic-component";

async function getData(id: string): Promise<string> {
	const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return post.ok ? (await post.json()).title : "Error";
}

export default async function Page({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	"use cache";
	const { id } = await params;

	return (
		<div>
			<PageData id={id} />
			<Suspense fallback={<div>Loading...</div>}>
				<DynamicComponent id={id} searchParams={searchParams} />
			</Suspense>
		</div>
	);
}

export function generateStaticParams() {
	return [];
}

async function PageData({ id }: { id: string }) {
	"use cache: remote";
	unstable_cacheLife("hours");
	const data = await getData(id);
	unstable_cacheTag(`post-${id}`, data);
	return (
		<>
			Page Data {id} - {data}
		</>
	);
}
