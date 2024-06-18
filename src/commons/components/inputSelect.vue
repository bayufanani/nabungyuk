<script setup lang="ts">
import { ref } from "vue";

const select = ref(null);
const props = defineProps({
    modelValue: String,
    options: Array<{ value: String | undefined; label: String }>,
});
const emit = defineEmits(["update:modelValue"]);
function changed(e: Event) {
    const el = e.target as HTMLSelectElement;
    emit("update:modelValue", el.value);
}
</script>
<template>
    <select
        name=""
        id=""
        :value="props.modelValue"
        @change="changed"
        class="p-4 rounded-lg border w-full mt-4"
        ref="select"
    >
        <option :value="item.value" v-for="item in props.options">
            {{ item.label }}
        </option>
    </select>
</template>

<style scoped></style>
