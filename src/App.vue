<template>
    <v-app>
        <drawer-component></drawer-component>
        <toolbar-component></toolbar-component>

        <v-content>
            <v-container fluid fill-height>
                        <router-view></router-view>
                        <!--<div class="text-xs-center">-->
                            <!--<v-dialog-->
                                    <!--v-model="dialog"-->
                                    <!--width="500"-->
                            <!--&gt;-->
                                <!--<v-card>-->
                                    <!--<v-card-title-->
                                            <!--class="headline grey lighten-2"-->
                                            <!--primary-title-->
                                    <!--&gt;-->
                                        <!--Privacy Policy-->
                                    <!--</v-card-title>-->

                                    <!--<v-card-text>-->
                                        <!--Lorem ipsum or incididunt uiqua.t nim id est laborum.-->
                                    <!--</v-card-text>-->

                                    <!--<v-divider></v-divider>-->

                                    <!--<v-card-actions>-->
                                        <!--<v-spacer></v-spacer>-->
                                        <!--<v-btn-->
                                                <!--color="primary"-->
                                                <!--flat-->
                                                <!--@click="dialog = false"-->
                                        <!--&gt;-->
                                            <!--I accept-->
                                        <!--</v-btn>-->
                                    <!--</v-card-actions>-->
                                <!--</v-card>-->
                            <!--</v-dialog>-->
                            <!--<v-btn-->
                                    <!--color="red lighten-2"-->
                                    <!--dark-->
                                    <!--@click="dialog = !dialog"-->
                            <!--&gt;-->
                                <!--Click Me-->
                            <!--</v-btn>-->
                        <!--</div>-->
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import ToolbarComponent from './components/ToolbarComponent'
    import DrawerComponent from './components/DrawerComponent'
    import HelloWorld from './components/HelloWorld'

    export default {
        name: 'App',
        components: {
            ToolbarComponent,
            DrawerComponent,
            HelloWorld
        },
        data() {
            return {
                dialog: false,
            }
        },
        methods: {},
        created() {

        }
    }
</script>
