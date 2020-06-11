<template>
  <a
    class="flex items-center text-current px-4 h-8 hover:font-bold hover:bg-gray2 cursor-pointer"
    role="menuitem"
    tabindex="0"
    ><slot name="icon"></slot>
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style></style>
