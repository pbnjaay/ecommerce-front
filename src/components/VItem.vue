<template>
  <div
    class="flex items-center text-current px-4 h-8 hover:bg-gray-300 cursor-pointer"
    role="menuitem"
    tabindex="0"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
