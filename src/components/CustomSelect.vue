<template>
    <div style="width: 400px; margin: 0 auto;">
        <v-select
            label="Select"
            :items="options"
            variant="outlined"
            v-model="modelValueProxy"
        ></v-select>
    </div>    
</template>

<script>
    export default {
        name: 'CustomSelect',
        props: {
            options: {
                type: Array,
                required: true,
            },
            modelValue: {
                type: String,
                default: "",
            }
        },
        emits: ['update:modelValue'],
        data() {
            return {
                selected: ''
            }
        },
        computed: {
            modelValueProxy: {
                get() {
                    return this.modelValue
                },
                set(newValue) {
                    this.$emit('update:modelValue', newValue)
                }
            }
        }
    }
</script>

<style>

</style>