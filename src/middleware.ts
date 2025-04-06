import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;
  const { pathname } = req.nextUrl;

  // Нэвтрээгүй хэрэглэгчийг шалгах
  if (!token && pathname !== '/') {
    // Нэвтрээгүй бол нэвтрэх хуудас руу чиглүүлэх
    // return NextResponse.redirect(new URL('/', req.url));
  }

  // Нэвтэрсэн бол хүсэлтийг үргэлжлүүлэх
  return NextResponse.next();
}
export const config = {
  matcher: ['/:path*', '/:path*']
};
