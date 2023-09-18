import {NextResponse} from 'next/server';
import {store} from "@/redux/store";

const config = ['/', "/map"]

export default async function middleware(req) {
    // const url = req.nextUrl.clone();
    // const newResponse = NextResponse.next();
    // const isAuthenticated = store.getState().userSlice.user
    //
    // const token = req.cookies?.get("token");
    // if (config.includes(url.pathname)) {
    //     if (token && !isAuthenticated) {
    //         return NextResponse.redirect(new URL(`/auth?token=${token.value}`, req.url));
    //     } else if (token && isAuthenticated) {
    //         return newResponse;
    //     }
    //     return NextResponse.redirect(new URL(`/auth`, req.url));
    // }
    // else {
    //     if (url.pathname === '/auth' && token && !isAuthenticated) {
    //         return NextResponse.redirect(new URL(`/auth?token=${token.value}`, req.url));
    //     } else if (url.pathname === '/auth' && token && isAuthenticated) {
    //         return NextResponse.redirect(new URL(`/`, req.url));
    //     }
    //     return newResponse;
    // }
}