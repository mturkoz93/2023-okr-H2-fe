export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(to.fullPath, from.fullPath);
  console.log(process.client)

  if (to.fullPath === '/login') {
    return
  }

  /* if (to.fullPath === '/login') {
    return
  }
  if (to.fullPath === '/signup') {
    return
  } */

  // or only skip middleware on initial client load
  if (process.client) {
    const router = useRouter();
    console.log("......")
    const userLocal = localStorage.getItem("user");
    const isAuthLocal = localStorage.getItem("isAuth");

    if (userLocal && isAuthLocal) {
      return;
    }
    return router.push("/login");
  }
});

// middleware/auth.ts
/* export default defineNuxtRouteMiddleware((to, from) => {
    console.log('From auth middleware')
}) */
