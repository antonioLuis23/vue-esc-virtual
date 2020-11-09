<template>
    <div class="grid-in-blocks zoomTarget">
        <img v-if="subSectorLogo" :src="subSectorLogo"  :alt="subSector.nome" />
        <h3 v-else>{{ subSector.nome }}</h3>
         <div v-show="subSector.funcionarios " id="odhen-retail-block">
            <table>
                <tr>
                    <th>Função</th>
                    <th>Nome</th>
                    <th>Chat</th>
                    <th>Email</th>
                </tr>
                <tr v-for="(funcionario, index) in subSector.funcionarios" :key="index">
                    <td>{{funcionario.funcao}}</td>
                    <td>{{funcionario.nome}}</td>
                    <td>
                        <a
                        :href="funcionario.chat"
                        target="_blank"
                        >
                        <img
                            class="img-icon"
                            :src="require('../assets/icons/chat-white-48dp.svg')"
                            alt="Chat"
                        />
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mostrarBlocos: false
            }
        },
        name: 'SubSetor',
        props:{
            subSector: Object
        },
        methods:{
            show: function(){
                console.log('show');
                this.mostrarBlocos=true;
            },
            hide: function(){
                console.log('hide');
                this.mostrarBlocos=false;
            }
        },
        computed: {
            subSectorLogo () {
                if (!this.subSector.logo){
                    return;
                } 
                return require("../assets/images/"+this.subSector.logo);

            }
        },
    }
</script>

<style scoped>

    .grid-in-blocks {
        padding: 1rem;
        -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
        -moz-box-shadow:    0 1px 4px 0 rgba(0,0,0,.15);
        box-shadow:         0px 2px 6px rgba(0, 0, 0, .1);
        transition:         all .2s ease-in-out;
        cursor:             pointer;
        text-align:         center;
    }
    .grid-in-blocks > img {
        width: 10em;
    }
    .grid-in-blocks:hover {
        background: rgba(0, 0, 0, 0.1);
        color:      white;
    }

    .img-icon {
        width: 1.5em;
    }

</style>