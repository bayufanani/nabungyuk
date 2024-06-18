<script setup lang="ts">
const props = defineProps(["label"]);
const emit = defineEmits(["click"]);
function clicked() {
    emit("click");
}
</script>
<template>
    <button
        class="bg-primary text-whitish p-4 w-full mt-4 rounded-full"
        @click="clicked"
    >
        {{ props.label }}
    </button>
</template>

<style scoped></style>
