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
            <v-layout column class="text-capitalize">
                <!--<div>-->
                <!--{{dayOfWeekString}}-->
                <!--</div>-->
                <div>
                    {{currentTime.toLocaleString("ru", { weekday: 'long', })}}
                </div>
                <div>
                    {{currentTime.toLocaleString("ru", { year: 'numeric',
                    month: 'short',
                    day: 'numeric',})}}
                    ico
                    {{currentTime.toLocaleString("ru", { hour: 'numeric',
                    minute: 'numeric',})}}
                    <!--{{currentTime.toLocaleString("ru", { day: 'short' })}}-->
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
        computed: {
            dayOfWeekString() {
                return this.dayDictionary(this.dayOfWeek);
            }
        },
        data() {
            return {
                currentTime: null,
                dayOfWeek: null
            }
        },
        methods: {
            updateCurrentTime() {
                this.currentTime = new Date();
                let currentDayOfWeek = this.currentTime.getDay();
                if (currentDayOfWeek === this.dayOfWeek) return;
                this.dayOfWeek = currentDayOfWeek;
            },
            dayDictionary(dayNumber) {
                console.log('run');
                switch (dayNumber) {
                    case 1: {
                        return 'Понедельник'
                    }
                    case 2: {
                        return 'Вторник'
                    }
                    case 3: {
                        return 'Среда'
                    }
                    case 4: {
                        return 'Четверг'
                    }
                    case 5: {
                        return 'Пятница'
                    }
                    case 6: {
                        return 'Суббота'
                    }
                    case 7: {
                        return 'Воскресенье'
                    }
                }
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
