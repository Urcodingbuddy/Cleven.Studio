import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/billing", "/marketplace", "/profile", "/upload", "/workspace"];

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const pathname = req.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute) {
        if (!session || !session.id) {
            return NextResponse.redirect(new URL("/signin", req.url));
        }
    }

    if (pathname === "/" && session?.id) {
        return NextResponse.redirect(new URL("/workspace", req.url)); 
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/billing", "/marketplace", "/profile", "/upload", "/workspace"],
};
