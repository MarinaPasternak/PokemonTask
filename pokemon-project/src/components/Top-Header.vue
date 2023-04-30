<template>
    <div>
        <button
            v-if="loggedIn"
            class="text-lg"
            @click="signOut"
            >Sign out
        </button>
        <button
            v-else 
            class="text-lg"
            @click="signIn"
        >Log In
        </button>
    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    export default {
        data() {
            return {
                loggedIn: false
            }
        },
         mounted() {
            this.setupFirebase();
        },
        methods: {
            setupFirebase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.loggedIn = true;
                    } else {
                        this.loggedIn = false;
                    }
                });
            },
            signOut() {
               firebase.auth().signOut().then(() => {
                    this.$router.replace({ name: 'pokemon' });
                });
            }, 
            signIn() {
                this.$router.replace({ name: 'login' });
            }
        }
    }
</script>

<style lang="css" scoped></style>
