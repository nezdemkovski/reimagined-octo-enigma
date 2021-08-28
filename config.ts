export const NEXT_PUBLIC_AUTH0_CLIENT_ID =
  process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
export const NEXT_PUBLIC_AUTH0_SCOPE = process.env.NEXT_PUBLIC_AUTH0_SCOPE;
export const NEXT_PUBLIC_AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const NEXT_PUBLIC_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  ? process.env.NEXT_PUBLIC_REDIRECT_URI
  : "http://localhost:3000/api/callback";
export const NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI = process.env
  .NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI
  ? process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI
  : "http://localhost:3000";

export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
export const AUTH0_HOOK_SECRET = process.env.AUTH0_HOOK_SECRET;
export const SESSION_COOKIE_SECRET = process.env.SESSION_COOKIE_SECRET;
export const SESSION_COOKIE_LIFETIME = process.env.SESSION_COOKIE_LIFETIME
  ? Number(process.env.SESSION_COOKIE_LIFETIME)
  : 7200;
