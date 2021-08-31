<template>
    <div>
        <teleport to="body" :disabled="!teleportPopup">
            <div class="popup" v-show="mostraPopup">
                <!-- The Modal -->
                <div :class="teleportPopup?'modalSearch':'modalSubsetor' " >
                    <div id="myModal" class="card-popup">
                        
                        <div class="card-top">
                            <div class="card-name">{{funcionario.nome}}</div>
                            <div class="card-funcao">{{funcionario.funcao}}</div>
                        </div>
                        <div class="card-bottom">
                            <div class="email-block">
                                <div class="email-icon">
                                    <a>
                                    <img class="img-icon"
                                    :src="require('../assets/icons/email-black-48dp.svg')"
                                    alt="Pessoa" />
                                    </a>
                                </div>
                                <div class="email-text">
                                    {{funcionario.email}}
                                </div>
                            </div>
                            <div class="chat-block">
                                <div class="chat-icon">
                                    <a>
                                    <img class="img-icon"
                                    :src="require('../assets/icons/chat-black-48dp.svg')"
                                    alt="Pessoa" />
                                    </a>
                                </div>
                                <div class="chat-text">
                                <a :href="funcionario.chat" target="_blank">Workplace Chat</a>
                                </div>
                            </div>
                            <div class="close-container">
                                <span @click="hidePopup" class="close-button">Fechar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>

        <div class="person" @click="showPopup">
            <div class="person-icon">
                <a>
                <img v-if="!isSearch" class="img-icon"
                 :src="require('../assets/icons/person-white-48dp.svg')" alt="Pessoa" />
                 <img v-else class="img-icon"
                 :src="require('../assets/icons/person-black-48dp.svg')" alt="Pessoa" />
                </a>
            </div>
            <div class="func-nome"> 
                <span>{{funcionario.nome}}</span>
            </div>
            <div class="func-setor" v-show="teleportPopup"> 
                <span>{{funcionario.setor}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mostraPopup: false
            }
        },
        methods:{
            showPopup: function(){
                this.mostraPopup = true;
            },
            hidePopup: function(){
                this.mostraPopup = false;
            }
        },
        props:{
            funcionario: Object,
            isSearch: Boolean,
            teleportPopup: Boolean
        },
        
    }
</script>

<style>
    .img-icon{
        width: 3em;
    }

    /* The Modal (background) */
    .modalSubsetor {
        display: block; /* Hidden by default */
        position: absolute; /* Stay in place */
        z-index: 1; /* Sit on top */
        margin-top: -43px;
        color: black; 
    }
    .modalSearch {
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
        font-size: 2em;
    }

    .modalSearch .card-popup {
        width: 450px;
    }

    /* Modal Content */
    .card-popup {
        background-color: #fefefe;
        margin:             auto; 
        color:            black;
        text-align:         left;
        
        box-shadow:         0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 3px 0px rgba(0,0,0,.12);
        border-radius:      1%;
    }

    .person {
        background:         rgba(255, 255, 255, 0.1);
        cursor:             pointer;
        transition:         all .2s ease-in-out;
    }
    .person:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    .person-icon{
        margin-bottom: -0.7em;
    }
    .func-setor{
        font-size: 0.8em;
    }
    .func-nome {
        font-weight: 500;
    }

    .card-name{
        font-size:       1.5em;
        font-weight:    600;
    }
    .card-top{
        padding: 1em 1.5em;
        color: white;
        background: midnightblue;
    }
    .card-bottom {
        padding: 0.5em 1em;
        
    }
    .email-block{
        display: grid;
        grid-template-columns: 1fr 6fr;
    }
    .chat-block{
        display: grid;
        grid-template-columns: 1fr 6fr;
    }
    .chat-text, .email-text{
        padding-top: 2px;
    }
    .card-bottom img{
        width: 2em;
    }

    /* The Close Button */
    .close-container{
        text-align: right;
    }
    .close-button{
        color: blue;
        font-weight: 400;
        padding: 0.4em;
        transition: all 300ms ease-in-out;
    }
    .close-button:hover,
    .close-button:focus {
        text-decoration: none;
        cursor: pointer;
        background-color: #e0f7ff;
    }
</style>