
<template>
    <div>
        <button class="btn" @click="toggle" :class="[modelValue ? 'btn-success' : 'btn-danger']">{{modelValue ? 'On' : 'Off'}}</button>
    </div>
</template>

<script>
    export default {
        name: 'CustomToggle',
        props: ['modelValue'],
        emits: ['update:modelValue'],
        methods: {
            toggle() {
                this.$emit('update:modelValue', !this.modelValue)
            }
        }
    }
</script>

<style>

</style>