
<template>
    <h1>Example</h1>
    <p>Props: {{ message }}</p>
</template>

<script setup>

    const { message } = defineProps({
        message: String
    })

</script>