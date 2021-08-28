import { initAuth0 } from "@auth0/nextjs-auth0";

import {
  AUTH0_CLIENT_SECRET,
  NEXT_PUBLIC_AUTH0_CLIENT_ID,
  NEXT_PUBLIC_AUTH0_DOMAIN,
  NEXT_PUBLIC_AUTH0_SCOPE,
  NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI,
  NEXT_PUBLIC_REDIRECT_URI,
  SESSION_COOKIE_LIFETIME,
  SESSION_COOKIE_SECRET,
} from "../config";

export default initAuth0({
  secret: SESSION_COOKIE_SECRET,
  issuerBaseURL: NEXT_PUBLIC_AUTH0_DOMAIN,
  baseURL: NEXT_PUBLIC_BASE_URL,
  clientID: NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  routes: {
    callback: NEXT_PUBLIC_REDIRECT_URI,
    postLogoutRedirect: NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI,
  },
  authorizationParams: {
    response_type: "code",
    scope: NEXT_PUBLIC_AUTH0_SCOPE,
  },
  session: {
    absoluteDuration: SESSION_COOKIE_LIFETIME,
  },
});
