<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = defineProps({
    label: String,
    isShown: {
        type: Boolean,
        default: false,
        required: true,
    },
    icon: String,
    class: String,
});
function click() {
    emit("click");
}
</script>
<template>
    <div @click="click" class="item" :class="{ active: props.isShown }">
        <span class="me-2">{{ props.label }}</span>
        <div
            class="size-10 rounded-full flex items-center justify-center shadow-lg"
            :class="props.class"
        >
            <img :src="props.icon" alt="" v-if="props.icon" class="size-6" />
        </div>
    </div>
</template>

<style scoped lang="postcss">
.item {
    @apply flex opacity-0 transition-all items-center duration-300 invisible;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
.item.active {
    @apply opacity-100 visible;
}
</style>
