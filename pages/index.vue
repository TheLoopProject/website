<template>

    <span class="text-[4rem]">
        <span class="font-bold"> This is </span>
        <span class="font-bold brand-gradient"> the Loop Project. </span>
    </span>

    <div class="text-2xl">

        We are an organization dedicated to making Minecraft modding more accessible.

    </div>

    <div class="text-2xl">

        Feel free to contribute on
        our <a class="underline" href="https://github.com/theLoopProject">Github</a> repositories.

    </div>

    <span class="text-5xl font-bold"> Developers </span>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://blryface.xyz/"> <user> Blurryface <LucideScanFace /> </user> </NuxtLink>

        <NuxtLink to="https://worldwidepixel.ca/"> <user> WorldWidePixel <LucideGlobe /> </user> </NuxtLink>

        <NuxtLink to="https://ampflower.gay/"> <user> Ampflower <LucideFlower2 /> </user> </NuxtLink>

        <NuxtLink to="https://intergrav.xyz/"> <user> Devin <LucideSnail /> </user> </NuxtLink>

        <NuxtLink to="https://github.com/gaming32/"> <user> Gaming32 <LucideGamepad2 /> </user> </NuxtLink>

        <NuxtLink to="https://theclashfruit.me/"> <user> TheClashFruit <LucideLeaf /> </user> </NuxtLink>

        <NuxtLink to="https://github.com/sakecode/"> <user> Fox <LucideRadar /> </user> </NuxtLink>

        <NuxtLink to="https://wagyourtail.xyz/"> <user> Wagyourtail <LucideLock /> </user> </NuxtLink>

        <NuxtLink to="https://rowan.pages.dev/"> <user> Rowan <LucideTreeDeciduous /> </user> </NuxtLink>

        <NuxtLink to="https://github.com/moehreag/"> <user> moehreag <LucideBird /> </user> </NuxtLink>

    </div>

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home - the Loop Project',
  description: "We are an organization dedicated to making Minecraft modding more accessible.",
  ogImage: "~/assets/img/icon512.png",
})
</script>
