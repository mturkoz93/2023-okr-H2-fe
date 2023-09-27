<script lang="ts" setup>
import { z } from "zod";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { login } = useAuthStore(); // use authenticateUser action from  auth store

const { isAuthenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Must be at least 5 characters"),
});
type Schema = z.output<typeof schema>;

const router = useRouter();

const state = ref({
  email: "",
  password: "",
});

const toast = useToast()

const submit = async (event: FormSubmitEvent<Schema>) => {
  try {
    console.log(event.data);
    await login({ email: event.data.email, password: event.data.password}); // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    if (isAuthenticated) {
      toast.add({ title: 'Successfully!' })
      router.push("/");
    }
  } catch (error) {
    // toast.add({ title: 'Successfully!' })
  }
};
</script>

<template>
  <div>
    <div class="container form mt-6">
      <div>
        <UForm :schema="schema" :state="state" @submit="submit">
          <UFormGroup size="xl" label="Email" name="email" required>
            <UInput v-model="state.email" icon="i-heroicons-envelope" placeholder="you@example.com" />
          </UFormGroup>
          <br>
          <UFormGroup size="xl" label="Password" name="password" required>
            <UInput v-model="state.password" type="password" icon="i-heroicons-eye" placeholder="enter your password" />
          </UFormGroup>
          <br>
          <UButton size="xl" block type="submit"> Login </UButton>
        </UForm>
      </div>

      <!-- <label for="uname"><b>Username</b></label>
        <input
          v-model="user.name"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
        />
  
        <label for="psw"><b>Password</b></label>
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter Password"
          name="psw"
          required
        /> -->

      <!-- <button @click.prevent="login" class="button">Login</button> -->
    </div>
  </div>
</template>
