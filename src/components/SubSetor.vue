<template>
    <div @click="show" v-clicafora="hide" class="grid-in-blocks zoomTarget" data-scalemode="both"  data-targetsize="0.7">
        <img v-if="subSectorLogo" :src="subSectorLogo"  :alt="subSector.nome" />
        <h3 v-else>{{ subSector.nome }}</h3>
         <div v-show="mostrarBlocos && subSector.funcionarios" class="info-subsector" >
             <div class="wrapper-info">
                 <div class="wrapper-sala">
                     <p>Videoconferência</p>
                    <table>
                        <tr>
                            <th>Função</th>
                            <th>Responsável</th>
                            <th>Link</th>
                        </tr>
                        <tr v-for="(sala, index) in subSector.salas" :key="index">
                            <td>{{sala.nomeSala}}</td>
                            <td>{{sala.responsavel}}</td>
                            <td>
                                <a
                                :href="sala.link"
                                target="_blank"
                                >
                                <img
                                    class="img-icon"
                                    :src="require('../assets/icons/video-white-48dp.svg')"
                                    alt="Video"
                                />
                                </a>
                            </td>
                        </tr>
                    </table>
                 </div>
                 <div class="wrapper-func">
                     <p>Funcionários</p>
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

                            <td>
                                <a
                                :href="funcionario.email"
                                target="_blank"
                                >
                                <img
                                    class="img-icon"
                                    :src="require('../assets/icons/email-white-48dp.svg')"
                                    alt="Email"
                                />
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
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
                this.mostrarBlocos=true;
            },
            hide: function(){
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
    .wrapper-info{
        display:grid;
        grid-template-columns:  repeat(2, 1fr); 
        grid-gap:               1em;
    }
    .wrapper-info table{
        margin: 0 auto;
        
    }
    .wrapper-info tr{
        border: 1px solid white;
    }
    .grid-in-blocks {
        padding: 1rem;
        -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
        -moz-box-shadow:    0 1px 4px 0 rgba(0,0,0,.15);
        box-shadow:         0px 2px 6px rgba(0, 0, 0, .1);
        transition:         all .2s ease-in-out;
        cursor:             pointer;
        text-align:         center;
        font-size:          0.6em;
    }
    .grid-in-blocks > img {
        width: 20em;
    }
    .grid-in-blocks:hover {
        background: rgba(0, 0, 0, 0.1);
        color:      white;
    }
    .info-subsector {
       font-size: 1em;
    }
    .img-icon {
        width: 1.5em;
    }

</style>