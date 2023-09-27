<!-- /users-admins/123 -->

<script setup lang="ts">
definePageMeta({
  title: 'Benim süper sitem'
})

const route = useRoute()

console.log(route.meta.title) // Benim süper sitem

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>

<template>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
  </template>