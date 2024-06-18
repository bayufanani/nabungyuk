<script setup lang="ts">
import Plus from "./icons/plus.vue";

const emit = defineEmits(["click"]);
function click() {
    emit("click");
}
</script>
<template>
    <div
        class="rounded-full bg-primary size-16 fixed right-4 bottom-32 hover:cursor-pointer shadow-lg"
        @click="click"
    >
        <Plus class="w-full h-full" />
    </div>
</template>

<style scoped></style>
