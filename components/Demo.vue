<template>
  <div class="flex flex-col h-screen justify-around items-center">
    <h1 class="text-4xl font-bitter text-slate-900">
      Bitter
    </h1>
    <h1 class="text-4xl font-ubuntu text-slate-900">
      Ubuntu
    </h1>
    <h1 class="text-4xl font-sacramento text-slate-900">
      Sacramento
    </h1>
  </div>
  <UButton>Button</UButton>
  <UButton>Button2</UButton>
  <UButton :ui="{ rounded: 'rounded-full' }" label="Buton"/>
  <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Button" :trailing="false" />
  <br>
  <br>
  <UButton block label="Buton" />
<br>
<br>
<br>
<UButton label="Button" color="gray">
  <template #trailing>
    <UIcon name="i-heroicons-arrow-right-20-solid" />
  </template>
</UButton>
<br>
<br>
  <UButton label="Button" color="gray">
    <template #leading>
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="3xs" />
    </template>
  </UButton>
  <br>
  <br>
  <br>
  <UButton color="gray" variant="solid" label="Button" />
  <UCard :ui="ui" />
</template>

<script setup>
const ui = /*ui*/ {
  background: 'bg-yellow dark:bg-slate-900'
}
</script>
