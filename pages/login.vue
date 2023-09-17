<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

async function handleLogin() {
  auth.login(form.value);
}
</script>

<template>
  <div>
    <div>
      <input v-model="form.email" />
    </div>

    <div>
      <input v-model="form.password" />
    </div>

    <div>
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>
