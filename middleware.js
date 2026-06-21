import { next } from '@vercel/functions';

// Password-gate ONLY the Stardew dashboard and its status API. The rest of the
// portfolio stays public (the matcher never fires for other paths).
export const config = {
  matcher: ['/Stardew', '/Stardew/:path*', '/api/stardew/:path*'],
};

export default function middleware(request) {
  // Password comes only from the Vercel env var (this repo is public). Fail
  // closed if it's unset rather than baking a default into source.
  const expected = process.env.STARDEW_PASSWORD;
  const header = request.headers.get('authorization') || '';
  if (expected && header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === expected) return next();
    } catch {
      // fall through to 401
    }
  }
  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Stardew", charset="UTF-8"' },
  });
}
