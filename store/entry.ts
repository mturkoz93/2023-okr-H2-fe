// store/entry.ts

import { defineStore } from 'pinia';
import { useUserStore } from './user'
import { storeNames } from './enums'

export const useEntryStore = defineStore(storeNames.ENTRY, {
  state: () => ({
    entries: [],
    loading: false,
  }),
  actions: {
    async sendEntry({ text }: any) {
      const { user } = useUserStore();
      const token = localStorage.getItem("accessToken") as any;
      // useFetch from nuxt 3
      const { data, pending, error }: any = await useFetch('api/entry/add', {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(token)}` },
        body: {
          text,
          user: {
            _id: user._id
          }
        },
      });

      if (error.value) {
        throw new Error(error.message)
      }

      this.loading = pending;

      useRouter().push('/');

    },
    async listEntries() {
      console.log('listEntries')
      const token = localStorage.getItem("accessToken") as any;
      const { data, pending, error }: any = await useFetch('api/entry/list', {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(token)}` },
      });

      if (error.value) {
        throw new Error(error.message)
      }

      this.loading = pending;

      this.entries = data?.value;
    },
  },
});