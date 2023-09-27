<script setup lang="ts">
import { useUserStore } from '~/store/user';
const { getUserDetail } = useUserStore()


onMounted(async () => {
  const userLocal = localStorage.getItem('user') as any
  await getUserDetail(userLocal ? JSON.parse(userLocal)?._id : null)
})
</script>

<template>
  <div>
    <header>
      <SharedNavbar></SharedNavbar>
    </header>
    <div class="main">
      <slot />
    </div>

    <UNotifications />
  </div>
</template>

<style scoped>
.main {
  margin-top: 60px;
  background-color: rgb(220, 227, 243);
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  justify-content: center;
}

.main .pageTitle {
  text-align: center;
}
</style>