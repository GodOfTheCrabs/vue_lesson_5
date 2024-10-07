<template>
    <div>
        <v-card variant="outlined">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text v-show="isVisible">{{ post.body }}</v-card-text>

            <v-card-actions>
                <v-btn style="border: 1px solid black; margin: 0 auto" @click="toggleVisibility">Hide Text</v-btn>
                <router-link :to="{path: '/post-info/' + post.id}">
                    <v-btn style="border: 1px solid black; margin: 0 auto">More detail</v-btn>
                </router-link>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: {
            post: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                isVisible: true,
            }
        },
        methods: {
            toggleVisibility() {
                this.isVisible = !this.isVisible;
            },
        }
    }
</script>

<style scoped>

</style>