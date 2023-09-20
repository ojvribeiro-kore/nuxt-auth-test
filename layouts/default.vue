<script lang="ts" setup>
const { $sanctumAuth } = useNuxtApp()
const router = useRouter()

const logout = async () => {
  await $sanctumAuth.logout(
    // optional callback function
    (data) => {
      console.log(data)
      router.push('/')
    }
  )
}
</script>

<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/account/user">User</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/auth/login">Login</NuxtLink>
      </li>

      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
