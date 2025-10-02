import Link from "next/link";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<h1 className="">Static home page</h1>
			<ul>
				<li>
					<Link href="/static">Static page at /static</Link>
				</li>
				<li>
					<Link href="/dynamic/1">Dynamic page at /dynamic/1</Link>
				</li>
				<li>
					<Link href="/dynamic/2">Dynamic page at /dynamic/2</Link>
				</li>
				<li>
					<Link prefetch={false} href="/dynamic/3">
						Dynamic page at /dynamic/3 (not prefetched)
					</Link>
				</li>
				{[1, 2, 3].map((id) => (
					<li key={id}>
						<Link href={`/prefixed-dynamic/${id}`}>
							Prefixed dynamic page at /prefixed-dynamic/{id}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
