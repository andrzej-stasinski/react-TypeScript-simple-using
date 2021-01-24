import React, { Component } from 'react';

interface User {
    nameUser: string;
}
interface SearchState {
    name: string;
    numberOfAbilities: number;
    baseExperirnce: number
    imageUrl: string;
    error: boolean;
}
class PokemonSearch extends Component<User, SearchState> {

    pokemonRef: React.RefObject<HTMLInputElement>
    
    constructor(props: User) {
        super(props)
        this.pokemonRef = React.createRef()
    }

    state: SearchState = { 
        name: '',
        numberOfAbilities: 0,
        baseExperirnce: 0,
        imageUrl: '',
        error: true,
     }

    
    // pokemonRef: React.RefObject<HTMLInputElement> = React.createRef()
    // pokemonRef = React.createRef()

    onSearchClick = (): void => {
        const inputValue = this.pokemonRef.current.value
        console.log(inputValue)
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then(res => {
            if(res.status !== 200) {
                console.log('error fetch')
                this.setState({ error: true });
                return res.json()
            } else {
                return res.json()
            }
        })
        .then(data => {
            console.log(data)
            this.setState({ 
                error: false,
                name: data.name,
                numberOfAbilities: data.abilities.length,
                baseExperirnce: data.base_experience,
                imageUrl: data.sprites.front_default,
            });
        })
        this.pokemonRef.current.value = ''
    }
    addNumbers = (a: number, b: number): number => {
        return a + b
    }    
    render() { 
        const {nameUser} = this.props
        const { name, numberOfAbilities, baseExperirnce, imageUrl, error } = this.state
        console.log(error)
        let resultMarkup = null;
        if(error) {
            resultMarkup = <p>Pokemon not found, try again</p>
        } else {
            resultMarkup = (
            <div>
                <h4>There's pokemon</h4>
                <div>name: {name} </div>
                <div>numberOfAbilities: {numberOfAbilities}</div>
                <div>baseExperirnce: {baseExperirnce}</div>
                <div>
                    <img src={imageUrl} alt="pokemon" className="pokemon-img" />
                </div>
            </div>
            )
        }

        return (
            <div>
                <h2>PokemonSearch</h2>
                <div>User {nameUser}</div>                    
                <div>
                    <div>bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, butterfree, weedle</div>                    
                </div>
                
                <input type='text' 
                    ref={this.pokemonRef}
                    className='my-input'
                />
                <button 
                    onClick={this.onSearchClick} className='my-button'
                >Search</button>
                <div>
                    {resultMarkup}
                </div>
            </div>
        );
    }
}
 
export default PokemonSearch;












































































