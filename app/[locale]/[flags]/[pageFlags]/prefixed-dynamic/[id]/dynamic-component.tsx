export default async function DynamicComponent({
	id,
	searchParams,
}: {
	id: string;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const searchParamsPromise = await searchParams;

	return (
		<div>
			Dynamic Component {id} {searchParamsPromise?.test}
		</div>
	);
}
