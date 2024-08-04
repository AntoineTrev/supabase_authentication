<template>
    {{ titre }}
    <!-- <Button :label="titre" /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'

defineOptions({ name: 'sa-navbar-addon' })

console.log(Button)

const titre = ref('Test')
</script>

<style scoped></style>
