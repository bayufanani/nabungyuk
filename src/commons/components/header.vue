<script setup lang="ts">
import back from "/src/assets/back.svg";

const emit = defineEmits(["backClick"]);
const props = defineProps(["title", "hasBackButton"]);

const backClick = () => {
    emit("backClick");
};
</script>

<template>
    <div class="header app-titlebar">
        <h1 class="flex flex-row text-2xl font-bold">
            <img
                :src="back"
                alt=""
                class="w-8 me-2"
                v-if="props.hasBackButton"
                @click="backClick"
            />
            <img src="/logo_icon.svg" alt="" class="w-8 me-2" v-else />
            <p>{{ props.title || "NabungYuk" }}</p>
        </h1>
    </div>
</template>

<style scoped lang="postcss">
.header {
    @apply flex flex-col px-4 place-content-center fixed top-0 left-0 right-0 backdrop-blur shadow-lg bg-whitish z-10 h-16;
}
</style>
