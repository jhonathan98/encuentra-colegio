import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Si no hay sesión y la ruta está protegida, redirige al login
  if (!session && req.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/pages/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/pages/:path*']
}