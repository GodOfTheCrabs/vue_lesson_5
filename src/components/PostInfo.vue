<template>
    <div style="width: 600px; margin: 0 auto;">
        <v-card >
            <v-img
            :width="400"
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            style="margin: 0 auto;"
            ></v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text v-show="isVisible">{{ post.body }}</v-card-text>

            <v-card-actions>
                <v-btn style="border: 1px solid black; margin: 0 auto" @click="toggleVisibility">More info</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import axiosInstance from '../../services/axios.js';


    export default {
        name: 'PostInfo',
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                posts: [],
                post: {},
                isVisible: true
            }
        },
        methods: {
            async getPosts() {
                try {
                    const response = await axiosInstance.get('/posts');
                    this.posts = response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            async findPost(id) {
            await this.getPosts();
            this.post = this.posts.find(post => post.id === Number(id)) || {};
            console.log(this.post); 
        }
        },
        mounted() {
            this.findPost(this.id)
        },
    }
</script>

<style>

</style>