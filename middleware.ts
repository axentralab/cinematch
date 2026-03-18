import { updateSession } from '@/lib/supabase/middleware'
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}