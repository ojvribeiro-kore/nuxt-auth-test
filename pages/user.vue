<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const auth = useAuthStore();
</script>

<template>
  <div>
    <pre>
        {{ auth.user }}
    </pre>
  </div>
</template>
