<template>

    <span class="text-[4rem]">
        <span class="font-bold"> Redirecting to </span>
        <span class="font-bold brand-gradient"> Discord. </span>
    </span>

</template>

<script setup lang="ts">
// passing 'to' as a string
await navigateTo('https://discord.com/invite/Ad2jRNsSJd', { external: true })

useSeoMeta({
  title: 'Discord - the Loop Project',
  title: 'Discord - the Loop Project',
  description: "The Loop Project discord server.",
  description: "The Loop Project discord server.",
  ogImage: 'assets/icon512.png',
})
</script>
