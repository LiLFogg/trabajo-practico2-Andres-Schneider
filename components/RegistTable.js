app.component('regist-table', {
  props:{
    gamelist:{
      type: Array,
      
    }
  },

  template:
  /*html*/
  `
  <div class="table">
  <table>
    <tr>
      <th>Nombre</th>
      <th>Plataforma</th>
      <th>Estado</th>
      <th>Rating</th>
    </tr>
    <tr v-for="game in gamelist">
      <th>{{game.name}}</th>
      <th>{{game.platform}}</th>
      <th>{{game.state}}</th>
      <th>{{game.rating}}</th>
    </tr>
    
  </table>
  </div>
  
  
  `,


  
})