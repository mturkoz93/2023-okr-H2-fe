<script setup lang="ts">
import { useUserStore } from '~/store/user';
  const { getUserDetail } = useUserStore()


onMounted(async () => {
  console.log('mounted')
  const userLocal = await localStorage.getItem('user') as any
  getUserDetail(userLocal ? JSON.parse(userLocal)?._id : null)
})


// const authenticated = ref(false)

</script>

<template>
    <div>
      <header>
        <SharedNavbar></SharedNavbar>
        <!-- <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li v-if="!authenticated" class="loginBtn" style="float: right">
            <nuxt-link to="/login">Login</nuxt-link>
          </li>
        </ul> -->
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
    min-height: calc(100vh - 60px);;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .main .pageTitle {
    text-align: center;
  }
</style>