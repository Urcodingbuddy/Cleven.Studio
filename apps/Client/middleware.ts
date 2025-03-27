import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/billing", "/market-place", "/profile", "/upload", "/workspace"];

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const pathname = req.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute) {
        if (!session || !session.id) {
            return NextResponse.redirect(new URL("/", req.url));        }
    }

    if ((pathname.startsWith('/signin') || pathname.startsWith('/signup')) && session) {
        return NextResponse.redirect(new URL('/workspace', req.url));
    }

    if (!session && pathname.startsWith('/workspace')) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    
    if (pathname === "/" && session) {
        return NextResponse.redirect(new URL("/workspace", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/signup", "/signin", "/billing", "/market-place", "/profile", "/upload", "/workspace"],
};
