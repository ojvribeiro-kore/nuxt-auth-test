<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { user, loggedIn } = useAuth();
</script>

<template>
  <div>
    Is user logged in?
    <span>{{ loggedIn ? "yes" : "no" }}</span>
  </div>
  <div v-if="loggedIn">
    What is users name?
    <span>{{ user.name }}</span>
  </div>
</template>
