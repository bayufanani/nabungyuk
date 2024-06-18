<script setup lang="ts">
const props = defineProps({
    modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
function input(event: Event) {
    const el = event.target as HTMLInputElement;
    emit("update:modelValue", el.value);
}
</script>
<template>
    <input
        type="text"
        :value="props.modelValue"
        class="p-4 rounded-lg border w-full mt-4"
        @input="input"
    />
</template>

<style scoped></style>
