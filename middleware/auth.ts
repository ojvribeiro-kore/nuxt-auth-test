export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn && to.path === "/user") {
    return navigateTo("/login", { replace: true });
  }

  if (to.path === "/login" && auth.isLoggedIn) {
    return navigateTo("/", { replace: true });
  }
});
