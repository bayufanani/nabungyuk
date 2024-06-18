<script setup lang="ts">
import "./style.css";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="select-none" @contextmenu="(e) => e.preventDefault()">
        <RouterView />
    </div>
</template>
