<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            left
            clipped
            permanent
            app
            :class="drawer ? 'elevation-15' : ''"
    >
        <div class="text-xs-center my-5">
            <v-badge overlap bottom>
                <v-icon slot="badge" color="white">settings</v-icon>

                <v-avatar :size="150">
                    <img
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                            alt="John"
                    >
                </v-avatar>
            </v-badge>
        </div>


    </v-navigation-drawer>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'

    export default {
        components: {
            HelloWorld
        },
        data() {
            return {
                drawer: true,
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style>

</style>
