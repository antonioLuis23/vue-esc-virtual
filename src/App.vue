<template>
    <div id="wrapper">
      <header>
        <h1>Escritório Virtual</h1>
      </header>
      <!-- Here is our page's main content -->
      <main>
        <div class="grid-container">
          
            <Setor v-for="(sector, index) in setores" :key="index" :sector="sector"></Setor>
  
        </div>
      </main>
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
          nome: 'Odhen',
          logo: 'odhen.png',
          background: '#d04b16',
          color: 'white',
          subsetores: [
            {
              nome: 'Retail'
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
          nome: 'TecFood',
          background: 'rgba(232,54,54, 1)',
          color: 'white',
          subsetores: []
        },
        {
          nome: 'Pebbian',
          background: 'rgba(0,157,116, 1)',
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
          nome: 'Salas de Reunião',
          subsetores: []
        }

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.grid-container {
    display:                grid;
    grid-template-columns:  repeat(2, 1fr); 
    grid-gap:               1em;
}


</style>
