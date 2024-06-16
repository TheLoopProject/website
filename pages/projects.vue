<template>

    <span class="text-[4rem]">
        <span class="font-bold"> Our current </span>
        <span class="font-bold brand-gradient"> projects. </span>
    </span>

    <projectContainer>

        <span class="flex items-center gap-4">

            <span class="text-5xl font-bold"> Sprint </span>

            <img class="h-12 bg-white rounded-xl p-1" src="~/assets/img/icons/sprint.png">

        </span>

        <div class="text-2xl">

            This is a mod that backports the sprint key to older versions of Minecraft.

        </div>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://modrinth.com/project/sprint/"> <user> Modrinth <LucideBox /> </user> </NuxtLink>

    </div>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://github.com/worldwidepixel/sprint-ornithe/"> <user> GitHub <LucideGithub /> </user> </NuxtLink>

    </div>

    <projectContainer>

        <span class="flex items-center gap-4">

            <span class="text-5xl font-bold"> Keys </span>

            <img class="h-12 bg-white rounded-xl p-1" src="~/assets/img/icons/keys.png">

        </span>

        <div class="text-2xl">

            A simple mod providing a better keybind menu for legacy Minecraft.

        </div>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://modrinth.com/project/loopkeys/"> <user> Modrinth <LucideBox /> </user> </NuxtLink>

    </div>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://github.com/TheLoopProject/loop-keys"> <user> GitHub <LucideGithub /> </user> </NuxtLink>

    </div>

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projects - the Loop Project',
  description: "Projects created by the Loop Project.",
  ogImage: "~/assets/img/icon512.png",
})
</script>