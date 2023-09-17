export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()

    console.log("loadUser");
    

    if (!auth.isLoggedIn) {
        await auth.fetchUser()
    }
})
