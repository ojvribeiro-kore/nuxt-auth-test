<script lang="ts" setup>
  const auth = useAuthStore()
</script>

<template>
  <div>
    <div>
      {{ auth.isLoggedIn }}
    </div>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/user">User</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>

      <li>
        <button @click="navigateTo('/logout', {replace: true})">Logout</button>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
