<template>
    <div class="navbar">
        <ul class="menu">
            <li v-if="isAuthenticated"><nuxt-link to="/">Home</nuxt-link></li>
            <li v-if="isAuthenticated"><nuxt-link to="/post">Entry</nuxt-link></li>
            <li v-if="isAuthenticated" class="logoutBtn" style="float: right">
                <a href="#" @click.prevent="logout">Logout</a>
            </li>
            <div>
                <li v-if="!isAuthenticated" class="loginBtn" style="float: right">
                    <nuxt-link to="/login">Login</nuxt-link>
                </li>
                <li v-if="!isAuthenticated" class="signupBtn" style="float: right">
                    <nuxt-link to="/signup">Signup</nuxt-link>
                </li>
            </div>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useUserStore } from '~/store/user';

const { user } = useUserStore();
const { logout } = useAuthStore();

const { isAuthenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

</script>

<style scoped>
.navbar {
    overflow: hidden;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    height: 60px;
}

.navbar a {
    float: left;
    display: block;
    color: rgb(0, 94, 218);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    transition: all 300ms;
    list-style-type: square;
}

.navbar a:hover {
    background: #eee;
    color: #6eb0ee;
    text-decoration: underline;
}

.menu {
    margin: 0;
    list-style: none;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
  }
</style>