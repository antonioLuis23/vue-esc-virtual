<template>
    <div v-clicafora="hidePopup">
         <div class="popup" v-show="mostraPopup">
            <!-- The Modal -->
            <div class="modal">
                <div id="myModal" class="card-popup">
                    <span @click="hidePopup" class="close">&times;</span>
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
                               <a :href="funcionario.chat">Chat Teknisa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="person" @click="showPopup">
            <div>
                <a>
                <img class="img-icon" :src="require('../assets/icons/person-white-48dp.svg')" alt="Pessoa" />
                </a>
            </div>
            <span>{{funcionario.nome}}</span>
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
                console.log('showPopup');
                this.mostraPopup = true;
            },
            hidePopup: function(){
                 console.log('hidePopup');
                this.mostraPopup = false;
            }
        },
        props:{
            funcionario: Object
        },
        
    }
</script>

<style>
    .img-icon{
        width: 3em;
    }

    /* The Modal (background) */
    .modal {
        display: block; /* Hidden by default */
        position: absolute; /* Stay in place */
        z-index: 1; /* Sit on top */
        margin-top: -60px;
        color: black;
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
    .close {
        color: #aaaaaa;
        font-size: 14px;
        position: absolute;
        right: 2px;
        top: -3px;
    }

    .close:hover,
    .close:focus {
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }
</style>