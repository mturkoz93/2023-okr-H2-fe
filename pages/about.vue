<template>
  <div>
    <h1 style="font-size: 64px;">About Page</h1>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  title: 'About',
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
</script>