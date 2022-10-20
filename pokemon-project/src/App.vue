<template>
    <div id="app">
        <div class="flex flex-row-reverse m-auto mt-10 mb-10 nav">
            <top-header/>
            <div>
                <router-link 
                    class="mr-7 text-lg"
                    to="/pokemon"
                >Pokemon
                </router-link>
                <router-link
                    class="mr-7 text-lg"
                    to="/profile"
                >Profile
                </router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import TopHeader from './components/Top-Header.vue';
    export default {
        components: { TopHeader },
        name: 'App',
    }
</script>

<style lang="css" scoped>
    #app .nav {
        width: fit-content;
    }
</style>
