<template>
    <div id="wrapper">
      <header>
      </header>
      <!-- Here is our page's main content -->
      <main>
        <div class="teknisa">
          <img :src="require('@/assets/images/logo-teknisa.png')" alt="Teknisa" />
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
import Setor from '@/components/Setor.vue'

export default {
  name: 'App',
  components: {
    Setor
  },

  data(){
    return {
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
                  chat: 'https://chat.teknisa.com/direct/allinemartins',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Moisés Freitas',
                  funcao: 'Scrum Master',
                  chat: 'https://chat.teknisa.com/direct/moisesfreitas',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Leticia Sahtler',
                  chat: 'https://chat.teknisa.com/direct/leticiasahtler',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Antonio Luis',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Rennan Tavares',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/rennantavares',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Rafael',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/rafael',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Vinicius Resende',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/viniciusresende',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Gustavo',
                  chat: 'https://chat.teknisa.com/direct/gustavo',
                  email: 'exemplo@teknisa.com',
                },
                {
                  nome: 'Everton',
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
          color: 'white'
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
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.teknisa > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4em;
    width: 30em;
}
.teknisa{
  padding: 0 80px;
}
.grid-container {
    display:                grid;
    grid-template-columns:  repeat(2, 1fr); 
    grid-gap:               1em;
}


</style>
