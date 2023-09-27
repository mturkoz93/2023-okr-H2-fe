// store/auth.ts

import { defineStore } from 'pinia';
import { useUserStore } from './user'
import { storeNames } from './enums'

interface UserPayloadInterface {
  name: string;
  email: string;
  password: string;
}

interface UserLoginInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore(storeNames.AUTH, {
  state: () => ({
    isAuthenticated: false,
    loading: false,
  }),
  actions: {
    async login({ email, password }: UserLoginInterface) {
      // useFetch from nuxt 3
      const { data, pending, error }: any = await useFetch('api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
        },
      });

      if (error.value) {
        throw new Error(error.message)
      }

      this.loading = pending;

      const { user } = useUserStore();
      user._id = data?.value?._id;
      user.name = data?.value?.name;
      user.profile = data?.value?.profile;
      user.email = data?.value?.email;

      if (data.value) {
        localStorage.setItem("accessToken", JSON.stringify(data?.value?.token));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuth", 'true');
        this.isAuthenticated = true; // set authenticated  state value to true
      }
    },
    async signup({ name, email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch('api/signup', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          name,
          email,
          password,
        },
      });
      this.loading = pending;
      return true
      // route to login page
    },
    async logout() {
      await localStorage.removeItem("accessToken");
      await localStorage.removeItem("user");
      await localStorage.removeItem("isAuth");
      this.isAuthenticated = false; // set authenticated  state value to false

      const { user } = useUserStore();
      user.name = '';
      user.profile = '';
      user.email = '';

      useRouter().push('/login');
    },
  },
});