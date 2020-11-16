<template>
    <div @click="show" v-clicafora="hide" class="grid-in-blocks zoomTarget" data-scalemode="both"  data-targetsize="0.7">
        
        <!-- Popup mostrando as videoconferências-->
        <div v-show="mostraSala" class="modalPopup">
            <div id="myModal" class="card-popup">
                <div class="card-top">
                    <div class="card-name">Videoconferência</div>
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
                    <div class="close-container">
                        <span @click="hideSala" class="close-button">Fechar</span>
                    </div>
                </div>
            </div>
        </div>


        <!-- Popup mostrando as infomações do subsetor-->
        <div v-show="mostraInfo" class="modalPopup">
            <div id="myModal" class="card-popup">
                <div class="card-top">
                    <div class="card-name">Informações</div>
                </div>
                <div class="card-bottom">
                    <div class="info-subsector" v-for="(info, index) in subSector.infos" :key="index">
                        <div class="titulo">
                            <h3>{{info.titulo}}</h3>
                        </div>
                        <div class="texto">
                            <p>{{info.texto}}</p>
                        </div>
                    </div>
                    <div class="close-container">
                        <span @click="hideInfo" class="close-button">Fechar</span>
                    </div>
                </div>
            </div>
        </div>



        <div v-show="mostrarBlocos" @click="showSala"  class="subsector-options video">
            <img   :src="require('../assets/icons/video-white-48dp.svg')" />
        </div>
        <div v-show="mostrarBlocos" @click="showInfo"  class="subsector-options info-icon">
            <img   :src="require('../assets/icons/info-white-48dp.svg')" />
        </div>

        <div v-if="subSectorLogo" class="title-subsector">
            <img class="subsector-logo"  :src="subSectorLogo"  :alt="subSector.nome" />
        </div>
        <div v-else  class="title-subsector">
            <h3>{{ subSector.nome }}</h3>
        </div>
        
         <div v-show="mostrarBlocos && subSector.funcionarios" class="people-subsector" >

            <div class="grid-people">
                <InfoFuncionario v-for="(funcionario, index) in subSector.funcionarios"
                    :key="index"
                    :teleportPopup="false"
                    :funcionario="funcionario"
                    ></InfoFuncionario>
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
                mostraSala: false,
                mostraInfo: false
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
            showSala: function(){
                this.mostraSala=true;
            },
            hideSala: function(){
                this.mostraSala=false;
            },
            showInfo: function(){
                this.mostraInfo=true;
            },
            hideInfo: function(){
                this.mostraInfo=false;
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
    .modalPopup{
        display: block; /* Hidden by default */
        position: absolute; /* Stay in place */
        z-index: 1; /* Sit on top */
        margin: 0 7.5%;
    }
    .grid-people{
        display:grid;
        grid-template-columns:  repeat(3, 1fr); 
        grid-gap:               0.4em;
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
    .people-subsector {
        font-size: 1em;  
    }
    .info-subsector{
        max-width: 158px;
        word-break: break-word;
    }
    .img-icon {
        width: 1.5em;
    }
    .title-subsector img {
        width: 19em;
    }
    .subsector-options img {
        width: 2em ;
        cursor: pointer;
    }
    .subsector-options {
        float: right;
    }
    .info-icon {
        margin-right: 3px;
    }
    .subsector-logo {
        margin-left: 26px;
    }
    .info-subsector .titulo h3{
        font-size: 1.5em;
        margin: 0 0;
    }
    .info-subsector .texto p{
        font-size: 1.2em;
        margin: 0 0;
    }
</style>