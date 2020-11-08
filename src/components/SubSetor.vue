<template>
    <div class="grid-in-blocks zoomTarget">
        <h3>{{subSector.nome}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'SubSetor',
        props:{
            subSector: Object
        }
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
    .grid-in-blocks:hover {
        background: rgba(0, 0, 0, 0.1);
        color:      white;
    }

</style>