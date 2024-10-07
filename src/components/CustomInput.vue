<template>
    <div class="form-group">
        <label class="h5">Custom input</label>
        <input type="text" class="form-control" placeholder="Test" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue">
    </div>
</template>

<script>
    export default {
        name: 'CustomInput',
        props: ['modelValue'],
        emits: ['update:modelValue'],
        data() {
            
        }
    }
</script>

<style>
    .form-control {
        border: 1px solid black;
    }
</style>