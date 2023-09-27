<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { useAuthStore } from '~/store/auth';

const { signup } = useAuthStore();
const router = useRouter();


const schema = z.object({
  name: z.string().min(4, "Must be at least 4 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Must be at least 5 characters"),
});
type Schema = z.output<typeof schema>;

const state = ref({
  name: '', 
  email: '', 
  password: '',
});

const submit = async (event: FormSubmitEvent<Schema>) => {
  await signup({ name: event.data.name, email: event.data.email, password: event.data.password });
  router.push('/login');
};
</script>

<template>
    <div>
      <div class="container form mt-6">
        <UForm :schema="schema" :state="state" @submit="submit">
          <UFormGroup size="xl" label="Username" name="name" required>
            <UInput v-model="state.name" icon="i-heroicons-user" placeholder="johndoe" />
          </UFormGroup>
          <br>
          <UFormGroup size="xl" label="Email" name="email" required>
            <UInput v-model="state.email" icon="i-heroicons-envelope" placeholder="you@example.com" />
          </UFormGroup>
          <br>
          <UFormGroup size="xl" label="Password" name="password" required>
            <UInput v-model="state.password" type="password" icon="i-heroicons-eye" placeholder="enter your password" />
          </UFormGroup>
          <br>
          <UButton size="xl" block type="submit"> Signup </UButton>
        </UForm>
      </div>
    </div>
  </template>