<template>
    <div :id="key" class="grid-blocks zoomTarget" 
    :style="{background: sector.background, color: sector.color }"
    @click.stop="show"
    v-clickoutside="hide"
    tabIndex="0"
    >
        <img v-if="sectorLogo" :src="sectorLogo"  :alt="sector.nome" />
        <h2 v-else>{{ sector.nome }}</h2>
        
        <div class="grid-container" 
            v-show="mostrarBlocos"
        >
            <SubSetor v-for="(subSector, index) in sector.subsetores" :key="index" :subSector="subSector"></SubSetor>
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
                console.log('show');
                this.mostrarBlocos=true;
            },
            hide: function(){
                console.log('hide');
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
.grid-blocks {
    padding: 1rem;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
    -moz-box-shadow:    0 1px 4px 0 rgba(0,0,0,.15);
    box-shadow:         0 1px 4px 0 rgba(0,0,0,.15);
    transition:         all .2s ease-in-out;
    cursor:             pointer;
    text-align:         center;
}
.grid-blocks:focus {
    outline: none;
}
.grid-blocks > img {
    width: 10em;
    margin: 20px;
}
.grid-blocks:hover {
    /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    
  }
</style>