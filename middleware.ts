import { randomBytes } from "crypto";
import { type NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
	const responseURL = new URL(
		`/en/${randomBytes(16).toString("hex")}/${randomBytes(16).toString("hex")}${request.nextUrl.pathname}`,
		request.url,
	);
	return NextResponse.rewrite(responseURL);
}

export const config = {
	runtime: "nodejs",
	matcher: ["/(.*)prefixed-dynamic(.*)"],
};
