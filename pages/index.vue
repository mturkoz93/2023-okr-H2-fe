<template>
  <div>
    <div v-for="item in entries">
      <UCard class="my-3 hover:bg-sky-400 cursor-pointer">
        {{ item.text }}
      </UCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useEntryStore } from '~/store/entry';

definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

const { listEntries } = useEntryStore();

const { entries } = storeToRefs(useEntryStore()) as any;

onMounted(async () => {
  await listEntries();
})
</script>