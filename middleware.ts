import { NextRequest, NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN ?? '';
const COOKIE_NAME = 'tp_access';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function middleware(request: NextRequest) {
  // If ACCESS_TOKEN is not configured, allow all (local dev)
  if (!ACCESS_TOKEN) {
    return NextResponse.next();
  }

  const { searchParams } = request.nextUrl;
  const tokenParam = searchParams.get('t');
  const accessCookie = request.cookies.get(COOKIE_NAME);

  // Valid token in URL → set access cookie, redirect to clean URL (no token visible)
  if (tokenParam === ACCESS_TOKEN) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete('t');
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(COOKIE_NAME, '1', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    });
    return response;
  }

  // Valid cookie → allow through
  if (accessCookie?.value === '1') {
    return NextResponse.next();
  }

  // No valid token or cookie → return empty 403 (reveal nothing)
  return new NextResponse(null, { status: 403 });
}

export const config = {
  // Protect the page but NOT static assets (images, fonts, robots.txt)
  matcher: ['/((?!_next|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|txt|pdf|woff|woff2)).*)'],
};
