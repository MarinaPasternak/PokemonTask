<template>
     <div>
        <div class="
            block 
            m-auto p-6 
            max-w-sm 
            bg-white 
            rounded-lg 
            border 
            border-gray-200 
            shadow-md
        ">
            <h2 class="mb-3 text-lg">Log In to continue</h2>
            <form @submit.prevent="pressed">
                <div class="login">
                    <input
                        class="
                            form-control
                            block 
                            w-full 
                            px-4 py-2 
                            text-xl 
                            font-normal 
                            text-gray-700 
                            bg-white 
                            bg-clip-padding 
                            border 
                            border-solid 
                            border-gray-300 
                            rounded transition 
                            ease-in-out m-0 
                            focus:text-gray-700 
                            focus:bg-white focus:border-blue-600 
                            focus:outline-none
                            mb-3
                        "
                        type="text" 
                        placeholder="login" 
                        v-model="username" 
                    />
                </div>
                <div class="password">
                    <input 
                    class="
                        form-control
                        block 
                        w-full 
                        px-4 py-2 
                        text-xl 
                        font-normal 
                        text-gray-700 
                        bg-white 
                        bg-clip-padding 
                        border 
                        border-solid 
                        border-gray-300 
                        rounded transition 
                        ease-in-out m-0 
                        focus:text-gray-700 
                        focus:bg-white focus:border-blue-600 
                        focus:outline-none
                        mb-3
                    "
                    type="password" 
                    placeholder="password" 
                    v-model="password" 
                />
                </div>
                <div class="flex">
                    <button class="
                        bg-white
                        hover:bg-gray-100
                        text-gray-800 
                        font-semibold 
                        py-2 px-4 
                        border 
                        border-gray-400 
                        rounded shadow
                        m-auto
                    ">
                        Login
                    </button>
                </div>
            </form>
            <div class="text-red-500 text-lg" v-if="error">
                <p>The username or password you entered is incorrect</p>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    export default {
        data() {
            return {
                username: '',
                password: '',
                error: false
            };
        }, 
        methods: {
            pressed()  {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.username, this.password)
                    .then(() => {
                        this.$router.replace({ name: 'profile' });
                    })
                    .catch(() => {
                        this.error = true;
                    });
            }
        }
        
    }
</script>

<style lang="css" scoped>
    h2, p  {
        text-align: center;
    }

</style>
