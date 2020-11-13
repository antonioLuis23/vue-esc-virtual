<template>
    <div :id="key" class="grid-blocks zoomTarget" 
    :style="{background: sector.background, color: sector.color }"
    @click.stop="show"
    v-clicafora="hide"
    tabIndex="0"
    >
        <img v-if="sectorLogo" :src="sectorLogo"  :alt="sector.nome" />
        <h2 v-else>{{ sector.nome }}</h2>
        
        <div class="grid-container" 
            v-show="mostrarBlocos"
        >
            <SubSetor v-for="(subSector, index) in sector.subsetores" :key="index" :subSector="subSector"></SubSetor>

                <div class="info grid-in-blocks" v-for="(info, index) in sector.info" :key="index">
                    <div class="titulo">
                        <h3>{{info.titulo}}</h3>
                    </div>
                    <div class="texto">
                        <p>{{info.texto}}</p>
                    </div>
                </div>

        </div>
        

    </div>
</template>

<script>
    import SubSetor from '@/components/SubSetor.vue';
    export default {
        name: 'Setor',

        data() {
            return {
                mostrarBlocos: false
            }
        },

        methods:{
            show: function(){
                this.mostrarBlocos=true;
            },
            hide: function(){
                this.mostrarBlocos=false;
            }
        },
        components: {
            SubSetor
        },
        computed: {
            sectorLogo () {
                if (!this.sector.logo){
                    return;
                } 
                return require("../assets/images/"+this.sector.logo);

            }
        },
        props:{
            sector: Object,
            key: Number
        }
    }
</script>

<style scoped>
    .grid-container{
        transition:         all .2s ease-in-out;
    }
    .grid-blocks {
        padding: 1rem;
        transition:         all .2s ease-in-out;
        cursor:             pointer;
        text-align:         center;
    }
    .grid-blocks:focus {
        outline: none;
    }
    .grid-blocks > img {
        width: 13em;
        margin: 20px;
    }
    .grid-blocks:hover {
        /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        
    }
    .titulo h3 {
        margin: 1em;
        font-size: 1.5em;
    }
    .texto p {
        font-size: 1.2em;
    }
</style>