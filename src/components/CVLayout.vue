<template>
  <div class="min-h-screen bg-gray-100 bg-[url('/background.jpg')] bg-cover bg-center font-sans antialiased">
    <div class="mx-auto max-w-5xl bg-white shadow-[0_0_33px_0_rgba(0,0,0,0.5)] min-h-screen flex flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<style>
@media print {
  body {
    background: none !important;
  }
  div {
    box-shadow: none !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
}
</style>
