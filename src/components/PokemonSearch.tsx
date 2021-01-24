import React, { Component } from 'react';

interface User {
    name: string;
    numberOfPokemons?: number;
}
interface SearchState {
    name: string;
    numberOfAbilites: number;
    baseExperirnce: number
    imageUrl: string;
    error: boolean;
}
class PokemonSearch extends Component<User, SearchState> {
    state: SearchState = { 
        name: '',
        numberOfAbilites: 0,
        baseExperirnce: 0,
        imageUrl: '',
        error: false,
     }
    pokemonRef: React.RefObject<HTMLInputElement> = React.createRef()
    // pokemonRef = React.createRef()
    onSearchClick = () => {
        console.log(this.pokemonRef)
        // const inputValue = this.pokemonRef.current.value
        // console.log(inputValue)
        fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
        .then(res => {
            if(res.status !== 200) {
                console.log('error fetch')
                this.setState({ error: true });
                return
            } else {
                return res.json()
            }
        })
        .then(data => {
            console.log(data)
            this.setState({ 
                error: false,
                name: data.name,
                numberOfAbilites: data.abilities.length,
                baseExperirnce: data.base_experience,
                imageUrl: data.sprites.front_default,
            });
        })
    }
    render() { 
        // const { name, numberOfPokemons } = this.props;
        const { name, numberOfAbilites, baseExperirnce, imageUrl } = this.state
        return (
            <div>
                <h2>PokemonSearch</h2>
                {/* <div>User {name} {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span> }</div>                     */}
                <div>name: {name} </div>
                <div>numberOfAbilites: {numberOfAbilites}</div>
                <div>baseExperirnce: {baseExperirnce}</div>
                <div>
                    <img src={imageUrl} />
                </div>
                <div>bulbasaur, ivysaur</div>                
                <input 
                    type='text' 
                    ref={this.pokemonRef}
                />
                <button onClick={this.onSearchClick} className='my-button'>Search</button>
            </div>
        );
    }
}
 
export default PokemonSearch;


// Component<> bez User ale z z czymś podobnym do obiektu
// ------------------------------------------------------ 
// import React, { Component } from 'react';

// class PokemonSearch extends Component<{
//     name: string;
//     numberOfPokemons: number;
//     }> {
//     state = {  }
//     render() { 
//         const { name, numberOfPokemons } = this.props;
//         return (
//             <div>
//                 <h2>PokemonSearch</h2>
//                 <div>User {name} has {numberOfPokemons} pokemons</div>
//             </div>
//         );
//     }
// }
 
// export default PokemonSearch;










































































