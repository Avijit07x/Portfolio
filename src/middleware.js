import { NextResponse } from "next/server";
import { authConfig } from "./lib/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
	const session = await auth();
	const isLoginPage = request.nextUrl.pathname.startsWith("/admin/login");
	const isDashboardPage =
		request.nextUrl.pathname.startsWith("/admin/dashboard");

	// Redirect to login page if the user is not authenticated and trying to access the dashboard
	if (!session && isDashboardPage) {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}

	// Redirect to dashboard if the user is authenticated and trying to access the login page
	if (session && isLoginPage) {
		return NextResponse.redirect(new URL("/admin/dashboard", request.url));
	}

	// Continue to the requested page
	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/dashboard/:path*", "/admin/login"],
};
