export default defineEventHandler((event) => {
  console.log("server middleware auth..");
  /* const userLocal = localStorage.getItem('user')
  const isAuthLocal = localStorage.getItem('isAuth')

  if (userLocal && isAuthLocal) {
    event.context.auth = { user: JSON.parse(userLocal) };
    event.context.isAuth = JSON.parse(isAuthLocal);
  } */
});
