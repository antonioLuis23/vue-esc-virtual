<template>
    <div id="wrapper">
      <header>
        <h1>Escritório Virtual</h1>
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
              salas:[
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
                  email: 'aline.martins@teknisa.com',
                },
                {
                  nome: 'Moisés Freitas',
                  funcao: 'Scrum Master',
                  chat: 'https://chat.teknisa.com/direct/moisesfreitas',
                  email: 'moises@teknisa.com',
                },
                {
                  nome: 'Leticia Sahtler'
                },
                {
                  nome: 'Antonio Luis',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'antonio@teknisa.com',
                },
                {
                  nome: 'Rennan',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'antonio@teknisa.com',
                },
                {
                  nome: 'Rafael',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'antonio@teknisa.com',
                },
                {
                  nome: 'Vinicius Resende',
                  funcao: 'Desenvolvedor',
                  chat: 'https://chat.teknisa.com/direct/antoniosilva',
                  email: 'antonio@teknisa.com',
                },
                {
                  nome: 'Gustavo'
                },
                {
                  nome: 'Everton'
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
          nome: 'Cloud e Rede',
          background: 'blue',
          color: 'white'
        },
        {
          nome: 'Comercial',
          background: 'coral',
          color: 'white'
        },
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
