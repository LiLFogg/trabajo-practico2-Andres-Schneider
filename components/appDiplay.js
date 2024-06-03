
app.component('app-display', 
{
  template: 
  /*html*/
  `
  <div class="form-regist"> 
  <form>
  <h3>Nuevo Juego</h3>
  <p class="priority-camp">por favor complete los siguentes campos:</p>

  <label for="name">Nombre: </label>
  <input type="text" placeholder="Nombre" id="name" v-model="name"><br/>

  <label for="platform">Plataforma: </label>
  <select id="platform" v-model="platform">
    <option>PC</option>
    <option>Play Station</option>
    <option>Xbox One</option>
  </select><br/>

  <label for="state">Estado: </label>
  <select id="state" v-model="state">
    <option>Pendiente</option>
    <option>jugando</option>
    <option>Completado</option>
  </select>

  

  <br/>

  <div>
    <label for="rating">Rating: </label>
    <select  id="rating" v-model.number="rating">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
  </div>

  <button 
      class="button" 
      type="submit"
      v-on:click="onSubmit">
      Registrar Juego
    </button> 
</form>
</div>

`,

data(){
  return {
    name: ' ',
    platform: ' ',
    state: ' ',
    rating: 0,
    gamelist:[],
  }
},

methods:{
  onSubmit(){
    if(this.name.trim()==''||this.platform.trim()==''||this.state.trim()=='')
    {
      alert('Por favor complete todos los campos');
    }else{
      let gameRegist = {
      
        name: this.name,
        platform: this.platform,
        state: this.state,
        rating: this.rating,
      }
      
      this.$emit('game-submitted', gameRegist)
  
      this.name = ''
      this.platform = ''
      this.state = ''
      this.rating = 0

    }
  
  },

  updateGameList (gameRegist)  {
    this.gamelist.push(gameRegist)

  },
  

},


})

//export {gamelist}