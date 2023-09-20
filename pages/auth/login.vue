<script lang="ts" setup>
definePageMeta({
  middleware: "guest",
});

const form = ref({
  email: "test@example.com",
  password: "password",
});

const { $sanctumAuth } = useNuxtApp();
const router = useRouter();
const errors = ref([]);

async function login() {
  try {
    await $sanctumAuth.login(
      form.value,
      // optional callback function
      (data) => {
        console.log(data);
        router.push("/auth/login");
      }
    );
  } catch (e: any) {
    // your error handling
    errors.value = e.errors;
  }
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
      <button @click="login">Login</button>
    </div>
  </div>
</template>
