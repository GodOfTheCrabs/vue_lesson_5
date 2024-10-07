<template>
    <div style="width: 900px; margin: 0 auto">
        <!-- 6. Використовуйте мета-поля маршруту для передачі даних між маршрутами. -->
        <p class="h4">{{ $route.meta.sharedData }}</p>
        <v-row>
            <v-col cols="12" md="4" v-for="post in getLimitItems()" :key="post.id">
                <Post :post="post"/>
            </v-col>  
        </v-row>
        <div style="margin-top: 25px;">
            <v-btn 
                v-for="page in totalPage()"
                :key="page" 
                @click="changePage(page)"
                variant="outlined"
                style="margin-left: 5px;"
                :class="{ active: currentPage === page }"
            >
                {{page}}
            </v-btn >
        </div>
    </div>
</template>

<script>    
    import axiosIntance from '../../services/axios.js';
    import Post from '../components/Post.vue';

    export default {
        name: 'Task9',
        components: {
            Post
        },
        data() {
            return {
                posts: [],
                currentPage: 1,
                itemLimit: 9
            }
        },
        methods: {
            getPosts() {
                axiosIntance.get('/posts')
                    .then(response => {
                        this.posts = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            totalPage() {
                return Math.ceil(this.posts.length / this.itemLimit)
            },
            getLimitItems() {
                const start = (this.currentPage - 1) * this.itemLimit
                const end = start + this.itemLimit
                return this.posts.slice(start, end)
            },
            changePage(page) {
                this.currentPage = page
            }
        },
        mounted() {
            this.getPosts()
        }
    }

</script>

<style lang="css" scoped>
    .active {
        background-color: #007bff;
        color: white;
    }
</style>