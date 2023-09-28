<template>
  <div>
    <div v-for="item in entries">
      <UCard class="my-3 hover:bg-sky-400 cursor-pointer">
        {{ item.text }}
        <div>
          <span class="text-xs text-gray-500 font-bold">{{ item.user.name }}</span>
          <br>
          <span class="text-xs text-gray-500">{{ dateFormat(item.createdAt) }}</span>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useEntryStore } from "~/store/entry";

definePageMeta({
  middleware: "auth",
});

const { listEntries } = useEntryStore();

const { entries } = storeToRefs(useEntryStore()) as any;

onMounted(async () => {
  await listEntries();
});

function dateFormat(isoDate: any) {
  const date = new Date(isoDate);

  // Daha okunaklı bir formata dönüştürün
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
}
</script>
