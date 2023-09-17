export const useAuthStore = defineStore("auth", {
  state() {
    return {
      user: null,
    };
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    async login(formData: any) {
      await useKoreAPI("/sanctum/csrf-cookie");

      await useKoreAPI("/login", {
        method: "POST",
        body: formData,
      });

      await this.fetchUser();
    },

    async fetchUser() {
      const { data, error } = await useKoreAPI("/api/user");

      console.log(error);
      

      this.user = (await data.value) as any;
    },

    logout() {
      this.user = null;
    },
  },
});
