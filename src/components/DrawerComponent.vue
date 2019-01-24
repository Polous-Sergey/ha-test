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

        <v-list>
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    class="text-xs-center"
            >

                <v-list-tile-content>
                    <v-list-tile-title class="text-xs-center text-uppercase" v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
        </v-list>

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
                items: [
                    { title: 'Приход', link: '/'},
                    { title: 'Группы', link: '/about' },
                    { title: 'Продукты', link: '/products' },
                    { title: 'Пользователи',link: '/users' },
                    { title: 'Настройки', link: '/settings' }
                ]
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style>

</style>
