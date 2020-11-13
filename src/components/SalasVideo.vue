<template>
    <div class="modal">
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
                    <tr v-for="(sala, index) in salas" :key="index">
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
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            salas: Object
        },
    }
</script>

<style scoped>

</style>