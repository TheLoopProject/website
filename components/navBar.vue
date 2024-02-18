<template>

    <div v-if="!isBrowseMenuOpen" class="select-none font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-row gap-12 items-center text-base justify-between sm:justify-normal pr-5">

        <NuxtLink class="text-lg flex items-center flex-row gap-2" to="https://loopmc.org">
        
            <img class="h-10" src="~/assets/img/icon512.png">

            the Loop Project

        </NuxtLink>

        <NuxtLink to="/" class="hidden sm:block"> Home </NuxtLink>

        <NuxtLink to="/projects" class="hidden sm:block"> Projects </NuxtLink>

        <NuxtLink to="https://github.com/theLoopProject" class="hidden sm:block"> Github </NuxtLink>

        <NuxtLink to="/discord" class="hidden sm:block"> Discord </NuxtLink>

        <NuxtLink to="" class="block sm:hidden" @click="toggleDropdown"> <LucideMenu /> </NuxtLink>

    </div>

    <div v-if="isBrowseMenuOpen" class="select-none font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-col gap-2.5 items-center text-base justify-between sm:justify-normal">

        <div class="w-full rounded-3xl flex flex-row gap-12 items-center text-base justify-between sm:justify-normal pr-2.5">

            <NuxtLink class="text-lg flex items-center flex-row gap-2" to="https://loopmc.org">
        
                <img class="h-10" src="~/assets/img/icon512.png">

                the Loop Project

            </NuxtLink>

            <NuxtLink to="" class="block sm:hidden" @click="toggleDropdown"> <LucideMenu /> </NuxtLink>

        </div>

            <NuxtLink to="/" class="text-center sm:hidden block bg-white w-full p-4 rounded-2xl"> Home </NuxtLink>

            <NuxtLink to="/projects" class="text-center sm:hidden block bg-white w-full p-4 rounded-2xl"> Projects </NuxtLink>

            <NuxtLink to="https://github.com/theLoopProject" class="text-center sm:hidden block bg-white w-full p-4 rounded-2xl"> Github </NuxtLink>

            <NuxtLink to="/discord" class="text-center sm:hidden block bg-white w-full p-4 rounded-2xl"> Discord </NuxtLink>
        

    </div>

</template>

<script setup lang="ts">

const isBrowseMenuOpen = ref(false)
isBrowseMenuOpen.value = false

function toggleDropdown() {
  isBrowseMenuOpen.value = !isBrowseMenuOpen.value

 /* if (isBrowseMenuOpen.value) {
    isMobileMenuOpen.value = false
  } */
}

</script>