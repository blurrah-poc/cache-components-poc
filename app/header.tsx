import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

export async function Header() {
	"use cache: remote";
	unstable_cacheLife("hours");
	unstable_cacheTag(`header`);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return <div>Header</div>;
}

export async function Footer() {
	// unstable_cacheLife("hours");
	// unstable_cacheTag(`footer`);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return <div>Footer</div>;
}
