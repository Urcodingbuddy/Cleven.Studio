import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/billing", "/market-place", "/profile", "/upload", "/workspace"];

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const pathname = req.nextUrl.pathname;

    // Handle protected client routes
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    if (isProtectedRoute && (!session || !session.id)) {
        // Redirect to signin with callback URL for better user experience
        const signinUrl = new URL("/signin", req.url);
        signinUrl.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(signinUrl);
    }

    // Handle auth pages for logged in users
    if ((pathname.startsWith('/signin') || pathname.startsWith('/signup')) && session?.id) {
        return NextResponse.redirect(new URL('/workspace', req.url));
    }

    // Redirect root path to workspace if logged in
    if (pathname === "/" && session?.id) {
        return NextResponse.redirect(new URL("/workspace", req.url));
    }

    // Handle API routes protection
    if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) {
        if (!session || !session.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Root and auth pages
        "/",
        "/signin/:path*",
        "/signup/:path*",
        
        // Protected client routes
        "/billing/:path*",
        "/market-place/:path*",
        "/profile/:path*",
        "/upload/:path*",
        "/workspace/:path*",
        
        // API routes
        "/api/:path*"
    ],
};

// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// const protectedRoutes = ["/billing", "/market-place", "/profile", "/upload", "/workspace"];

// export async function middleware(req: NextRequest) {
//     const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//     const pathname = req.nextUrl.pathname;

//     const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

//     if (isProtectedRoute) {
//         if (!session || !session.id) {
//             return NextResponse.redirect(new URL("/", req.url));
//         }
//     }

//     if(pathname.startsWith('/signin') || pathname.startsWith('/signup') && session?.id) {
//         return NextResponse.redirect(new URL('/workspace', req.url));
//     }

//     if (!session && pathname.startsWith('/workspace')) {
//         return NextResponse.redirect(new URL('/', req.url));
//     }

//     if (pathname === "/" && session?.id) {
//         return NextResponse.redirect(new URL("/workspace", req.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/", "/signup", "/signin", "/billing", "/market-place", "/profile", "/upload", "/workspace"],
// };
