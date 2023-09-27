<template>
  <!-- <div>
    <h1>Hello World!</h1>
    <Demo></Demo>
    <Dropdown></Dropdown>
    <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-4 rounded-xl">
      Save changes
    </button>
    <span class="p-4 text-primary-500 dark:text-primary-400 border">Styled Text</span>
  </div> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig)
</script>