<template>
    <div class="w-full flex justify-center">
      <div class="w-96 p-3">
        <UForm :schema="schema" :state="state" @submit="submit">
          <UFormGroup size="xl" name="text">
            <UTextarea v-model="state.text" color="gray" variant="outline" size="xl" placeholder="write entry..." autofocus />
          </UFormGroup>
          <br>
          <UButton size="xl" block type="submit"> Send </UButton>
        </UForm>
        
      </div>
    </div>
</template>

<script setup lang="ts">
import { useEntryStore } from "~/store/entry";
definePageMeta({
  title: 'Entry',
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

const { sendEntry } = useEntryStore();

import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const schema = z.object({
  text: z.string().min(5, "Must be at least 5 characters").max(90, "Must be maximum 90 characters"),
});
type Schema = z.output<typeof schema>;

const state = ref({
  text: "",
});

const toast = useToast()

const submit = async (event: FormSubmitEvent<Schema>) => {
  try {
    console.log(event.data);
    await sendEntry({ text: event.data.text });
    toast.add({ title: 'Successfully!' })
  } catch (error) {
    // toast.add({ title: 'Successfully!' })
  }
};
</script>