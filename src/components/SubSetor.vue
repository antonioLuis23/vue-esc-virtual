<template>
    <div @click="show" v-clicafora="hide" class="grid-in-blocks zoomTarget" data-scalemode="both"  data-targetsize="0.7">
        
        
        <div v-show="mostraPopup" class="modal">
            <div id="myModal" class="card-popup">
                <span @click="hidePopup" class="close">&times;</span>
                <div class="card-top">
                    <div class="card-name">Videoconferencia</div>
                </div>
                <div class="card-bottom">
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
                                    :src="require('../assets/icons/duo-black-48dp.svg')"
                                    alt="Video"
                                />
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>



        <div v-show="mostrarBlocos" @click="showPopup"  class="video-options">
            <img   :src="require('../assets/icons/video-white-48dp.svg')" />
        </div>
        <div v-if="subSectorLogo" class="title-subsector">
            <img  :src="subSectorLogo"  :alt="subSector.nome" />
        </div>
        <div v-else  class="title-subsector">
            <h3>{{ subSector.nome }}</h3>
        </div>
         <div v-show="mostrarBlocos && subSector.funcionarios" class="info-subsector" >
             <div class="wrapper-info">
                 <div class="wrapper-func">
                    <div class="grid-people">
                        <InfoFuncionario v-for="(funcionario, index) in subSector.funcionarios"
                         :key="index"
                         :funcionario="funcionario"
                         ></InfoFuncionario>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoFuncionario from '@/components/InfoFuncionario.vue';
    export default {
        data(){
            return {
                mostrarBlocos: false,
                mostraPopup: false
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
            },
            showPopup: function(){
                this.mostraPopup=true;
            },
            hidePopup: function(){
                this.mostraPopup=false;
            }
        },
        components: {
            InfoFuncionario
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
    /* .wrapper-info{
        display:grid;
        grid-template-columns:  repeat(2, 1fr); 
        grid-gap:               1em;
    } */
    .grid-people{
        display:grid;
        grid-template-columns:  repeat(3, 1fr); 
        grid-gap:               0.4em;
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
    }
    .info-subsector {
       font-size: 1em;
    }
    .img-icon {
        width: 1.5em;
    }
    .title-subsector img {
        width: 19em;
    }
    .video-options img {
        width: 2em ;
        cursor: pointer;
    }
    .video-options {
        float: right;
    }
</style>