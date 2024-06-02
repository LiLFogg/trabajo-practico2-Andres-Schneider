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
    <tr >
      <th>cars</th>
      <th>play 2</th>
      <th>completado</th>
      <th>7</th>
    </tr>
    
  </table>
  
  </div>
  
  
  `,

  methods:{
    
  },
  
})