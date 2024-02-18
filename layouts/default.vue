<template>

    <div class="flex justify-center flex-col p-6 gap-8">

      <navBar />

      <div class="m-[5%] gap-8 flex-col flex">
        <slot />

      </div>

      <pageFooter />

    </div>

</template>

<style>

:root {
  font-family: Inter, Helvetica, sans-serif;
  --brand-colour: #ffe6ef;
}

.brand-gradient {
    background: linear-gradient(90deg, rgba(255,0,80,1) 0%, rgba(255,6,189,1) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

</style>