import { getUserToken } from "~/utils/session";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  console.log("server middleware auth..");

  const requestedURL = getRequestURL(event);
  if (requestedURL.pathname.startsWith("/api/users") || requestedURL.pathname.startsWith("/api/entry")) {
    const authorizationHeaders = event.node.req.headers["authorization"];
    console.log(authorizationHeaders);
    if (!authorizationHeaders) {
      throw new Error("No authorization headers");
    }

    const token = authorizationHeaders.split(" ")[1];
    if (!token) {
      throw new Error("No token");
    }

    const decoded = await getUserToken(token);
    console.log(decoded);
    event.context.user = decoded;
  }
});
