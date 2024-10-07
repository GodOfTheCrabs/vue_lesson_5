
<template>
    <div>
        <button class="btn btn-success" @click="increment">+</button>
        <button class="btn btn-danger" @click="decrement">-</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: ['modelValue'],
        emits: ['update:modelValue'],
        data() {
            return{
                
            }
        },
        methods: {
            increment() {
                this.$emit('update:modelValue', this.modelValue + 1)
            },
            decrement() {
                this.$emit('update:modelValue', this.modelValue - 1)
            }
        }
    }
</script>

<style>
    .btn {
        width: 75px;
    }
</style>