export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.fullPath === '/login') {
    return
  }
  // or only skip middleware on initial client load
  if (process.client) {
    const router = useRouter();
    const userLocal = localStorage.getItem("user");
    const isAuthLocal = localStorage.getItem("isAuth");

    if (userLocal && isAuthLocal) {
      return;
    }
    return router.push("/login");
  }
});
