<template>
    <v-toolbar
            fixed
            app
            clipped-left>
        <v-toolbar-title>
            <v-avatar>
                <img :src="require('../assets/logo.svg')" alt="vuetify">
            </v-avatar>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-layout column>
                <div class="text-capitalize">
                    {{watchData.dayOfWeek}}
                    {{counter}}
                </div>
                <div>
                    {{watchData.date}}
                    <v-icon color="primary">access_time</v-icon>
                    {{watchData.time}}
                </div>
            </v-layout>
        </div>
    </v-toolbar>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'

    export default {
        components: {
            HelloWorld
        },
        sockets: {
            connect: function () {
                console.log('socket connected');
            },
            counter: function (data) {
                this.counter = data;
            }
        },
        computed: {
            watchData() {
                return {
                    dayOfWeek: this.currentTime.toLocaleString("ru", {weekday: 'long'}),
                    time: this.currentTime.toLocaleString("ru", {hour: 'numeric', minute: 'numeric'}),
                    date: this.currentTime.toLocaleString("ru", {year: 'numeric', month: 'short', day: 'numeric'})
                }
            },
        },
        data() {
            return {
                currentTime: null,
                counter: null
            }
        },
        methods: {
            updateCurrentTime() {
                this.currentTime = new Date();
            }
        },
        filters: {},
        created() {
            this.updateCurrentTime();
            setInterval(() => this.updateCurrentTime(), 1000);
        }
    }
</script>

<style>

</style>
