<template>

    <div class="font-bold bg-[color:var(--brand-colour)] w-full p-2.5 rounded-3xl flex flex-row gap-12 items-center text-base justify-between sm:justify-normal pr-5">

        <NuxtLink class="text-lg flex items-center flex-row gap-2" to="https://loopmc.org">
        
            <img class="h-10" src="assets/icon512.png">

            the Loop Project

        </NuxtLink>

        <NuxtLink to="/" class="hidden sm:block"> Home </NuxtLink>

        <NuxtLink to="/projects" class="hidden sm:block"> Projects </NuxtLink>

        <NuxtLink to="https://github.com/theLoopProject" class="hidden sm:block"> Github </NuxtLink>

        <NuxtLink to="/discord" class="hidden sm:block"> Discord </NuxtLink>

        <NuxtLink to="" class="block sm:hidden"> <LucideMenu /> </NuxtLink>

    </div>

</template>