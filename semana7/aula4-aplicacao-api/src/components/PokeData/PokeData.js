import React, {Component} from 'react';
import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2"

class PokeData extends Component {
   constructor(props)   {
      super(props);
      
      this.state = {
         allPokemons: [],
         pokeTypes: [],
         pokePicture: [],
      }
   }
   
   getAllPokemons = async () => {
      const response = await axios.get(`${baseUrl}/pokemon?limit=151`);
      this.setState({allPokemons: response.data.results});
   }

   getPokemonTypes = async () => {
      const response = await axios.get(`${baseUrl}/type`);
      this.setState({pokeTypes: response.data.results});
   }

   getPokemonDetails = async (event) => {
      const pokeDetails = event.target.value;
      const response = await axios.get(pokeDetails);
      const pokePhoto = response.data.pokemon;
      this.setState({pokePicture: pokePhoto})
      console.log(pokePhoto)
   }
   
   componentDidMount() {
      this.getPokemonTypes();
   }

   render() {
      //const pokeTypeSelected = this.state.pokePicture !== '';
      return(
         <div>
            <select onChange={this.getPokemonDetails}>
               <option>Selecione o tipo de Pokemon</option>               
               {this.state.pokeTypes.map((type) => (<option value={type.url}>{type.name}</option>))}
            </select>
            <hr/>            
            {/*pokeTypeSelected && (<img src={this.state.pokePicture} alt="foto dos pokemons"/>)*/}                  
         </div>
      )
   }
}

export default PokeData;