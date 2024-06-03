app.component('details-box', {

  template:
  /*html*/
  `
  <div class="details-container">
  <h3>Detalles del Juego</h3>
  <p>Nombre: {{this.name}}</p>
  <p>Plataforma: {{this.platform}}</p>
  <p>Estado: {{this.state}}</p>
  <p>Rating: {{this.rating}}</p>
  </div>
  `,

})