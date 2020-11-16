<template>
    <div id="wrapper">
      <header>
      </header>
      <!-- Here is our page's main content -->
      <main>
        <!-- Navigation bar -->
        <div class="teknisa">
          <div class="navbar">
            <img class="logo-teknisa" :src="require('@/assets/images/logo-teknisa.png')" alt="Teknisa" />
            
            <div class="container-form">          
              <form class="search-form">
                <input
                :style="{ backgroundImage: 'url(' + require('@/assets/icons/search-black-48dp.svg') + ')' }"
                 type="text" class="search-box" v-model="searchQuery" placeholder="Procurar funcionário" @keyup="submitSearch">
              </form>
            </div>
          </div>
          <!-- Search Results -->
          <div v-show="isResult" class="search-container">
              <div class="grid-search">
                <InfoFuncionario v-for="(funcionario, index) in resultFunc"
                    :key="index"
                    :teleportPopup="true"
                    :funcionario="funcionario"
                    :isSearch="true"
                    ></InfoFuncionario>
              </div>
          </div>
          
          <div class="grid-container">
            
              <Setor v-for="(sector, index) in setores" :key="index" :sector="sector"></Setor>

          </div>
        </div>
      </main>
      <footer>
        <p>Criado por Antonio Luis.</p>
      </footer>
    </div>
</template>

<script>
import Setor from '@/components/Setor.vue';
import InfoFuncionario from '@/components/InfoFuncionario.vue';

export default {
  name: 'App',
  components: {
    Setor, InfoFuncionario
  },

  data(){
    return {
      searchQuery: '',
      resultFunc: null,
      isResult: false,
      setores: [
        {
          nome: 'Diretoria',
          background: '#212121',
          color: 'white',
          subsetores:[]
        },
        
        {
          nome: 'TecFood',
          background: 'rgba(232,54,54, 1)',
          color: 'white',
          subsetores: []
        },
        {
          nome: 'Recursos Humanos',
          background: '#3363ce',
          color: 'white',
          subsetores: []
        },
        {
          nome: 'Pebbian',
          background: 'rgba(0,157,116, 1)',
          color: 'white',
           
        },
        {
          nome: 'Salas de Reunião',
          background: 'indianred',
          color: 'white',
          subsetores: []
        },
        {
          nome: 'Odhen',
          logo: 'odhen.png',
          background: '#d04b16',
          color: 'white',
          subsetores: [
            {
              nome: 'Retail',
              logo: 'odhen-retail.png',
              infos: [
                {
                  titulo: "Daily Meeting",
                  texto: "DM ocorre todos os dias às 14:45h na sala https://hangouts.google.com/call/tysdkuGiy51QuF9ahgjrACEA"
                },
                {
                  titulo: "Leonardo de férias",
                  texto: "Leonardo de férias durante o mês de novembro."
                }
              ],
              salas: [
                {
                  nomeSala: 'Odhen Retail',
                  responsavel: 'Alline Martins',
                  link: 'https://hangouts.google.com/call/tysdkuGiy51QuF9ahgjrACEA' 
                },
                {
                  nomeSala: 'Odhen Retail/Conciliador',
                  responsavel: 'Francismar Araujo',
                  link: 'https://hangouts.google.com/u/7/call/R5aS85hkjD4YZvTIi79sAEEE?no_rd' 
                },
                {
                  nomeSala: 'Sala dos Estágiarios',
                  responsavel: 'Alline Martins',
                  link:'https://hangouts.google.com/call/cpMezNDehG758A61baUmACEA'
                }
              ],
              funcionarios: [
                {
                  nome: 'Alline Martins',
                  funcao: 'Líder',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/allinemartins',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Moisés Freitas',
                  funcao: 'Scrum Master',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/moisesfreitas',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Leticia Sahtler',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/leticiasahtler',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Antonio Luis',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Rennan Tavares',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/rennantavares',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Rafael',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/rafael',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Vinicius Resende',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/viniciusresende',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Gustavo',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/gustavo',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Everton',
                  funcao: 'Desenvolvedor',
                  setor: 'Odhen Retail',
                  chat: 'https://chat.teknisa.com/direct/everton',
                  email: 'exemplo@teknisa.com',
                }

              ]
            },
            {
              nome: 'Food Service'
            },
            {
              nome: 'Delivery'
            },
            {
              nome: 'For Sale'
            }
          ]
        },
        {
          nome: 'Governança',
          background: 'green',
          color: 'white',
          subsetores:[
            {
              nome: 'controladoria',
              funcionarios:[
                {
                  nome: 'Angelica',
                  funcao: 'Contabilista',
                  setor: 'Contabilidade',
                  chat: 'https://chat.teknisa.com/direct/angelica',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Luciana',
                  funcao: 'Contabilista',
                  setor: 'Contabilidade',
                  chat: 'https://chat.teknisa.com/direct/luciana',
                  email: 'exemplo@teknisa.com',
                }
              ]
            }
          ]
        },
        {
          nome: 'Zeedhi',
          background: 'chocolate',
          color: 'white'
        },
        {
          nome: 'EAD',
          background: 'blueviolet',
          color: 'white'
        },

        {
          nome: 'Cloud e Rede',
          background: 'blue',
          color: 'white'
        },
        {
          nome: 'Comercial',
          background: 'coral',
          color: 'white'
        }, 
        {
          nome: 'Quadro de Avisos',
          background: '#fff700',
          color: 'black',
          info: [
            {
              titulo: "Dev Info: Integrações Odhen",
              texto:"Dev info ocorrendo toda sexta das 9:15h às 09:45 na sala: https://meet.google.com/qcq-rugo-ixp"
            },
            {
              titulo: "Nova Plataforma de Documentação: Docs Teknisa!",
              texto: "Chegou mais novidade por aqui! Estamos lançando a plataforma de documentação Teknisa: docs.teknisa.com"
            }
          ]
        }
      ]
    }
  },

  computed: {
    listaFunc(){
      //retorna lista de todos os setores que possuem um subsetor
      let listaSubsetores = this.setores.flatMap(setor => setor.subsetores?setor.subsetores:[]);
      //retorna a lista de todos os funcionarios dentro de subsetores;
      return listaSubsetores.flatMap(subsetor => subsetor.funcionarios?subsetor.funcionarios:[]);
    }
  },
  methods: {
    submitSearch: function(){
      if(this.searchQuery=== ''){
        this.isResult = false;
      }else{
        this.resultFunc = this.listaFunc.filter(
          func => (func.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
          || func.setor.toLowerCase().includes(this.searchQuery.toLowerCase())
          || func.funcao.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          ? true: false ); 
        console.log('resultado:',this.resultFunc);
        this.isResult = true;
      }
    }
  }
}
</script>

<style>
  html {
      font-size: 10px;
  }
    
  h1 {
    font-size: 4em;
  }
  h2 {
      font-size: 3em;
  }
  h3 {
      font-size: 2em;
  }
  h1, h2, h3, h4 {
    font-weight: 600;
  }
  p {
      font-size: 1.5em; 
  }
  body {
      font-family:    'Poppins';
      font-weight:    300;
      font-size:      1em;
      line-height:    1.65;
      overflow-x:     hidden;
      margin: 0;
  }

  #app {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 60px;
  }

  .teknisa, footer{
    padding: 0 2vw;
  }
  .grid-container {
      display:                grid;
      grid-template-columns:  repeat(2, 1fr); 
      grid-gap:               1em;
  }
  .grid-search{
        display:                grid;
        grid-template-columns:  repeat(auto-fill, minmax(200px, 1fr)); 
        grid-gap:               0.4em;
        font-size:              20px;
        text-align:             center;
    }
    .search-box {
      font-size:          2em;
      margin-bottom:      2em;
      border:             none;
      box-shadow:         4px 4px 10px rgba(0,0,0,0.06);
      outline:            none;
      border-bottom:      3px solid #b4b4b4;
      -webkit-transition: border 300ms ease-out;
      -moz-transition:    border 300ms ease-out;
      -o-transition:      border 300ms ease-out;
      transition :        border 300ms ease-out;
      background-position:0.7em 0.76em;
      background-repeat:  no-repeat;
      padding:            1em 3em 1em 3em;
      background-size:    1.8em;

    }
    .search-container {
      margin-bottom: 2em;
    }
    .search-box:focus, .search-box:focus-visible, .search-box:focus-within{
      border:none;
      border-bottom: 3px solid black;
    }

    .logo-teknisa{
      width: 300px;
    }
    .logo-search{
      position: relative;
      top: 24px;
    }
    .container-form{
      display: inline-block;
      margin-left: 22px;
      position: absolute;
    }
    .navbar{
      margin-bottom: 4em;
    }
</style>
