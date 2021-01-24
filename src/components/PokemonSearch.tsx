import React, { Component } from 'react';
// import User from '../interfaces/User.interface';

class PokemonSearch extends Component<{name: string, numberOfPokemons: number}> {
    state = {  }
    render() { 
        const { name, numberOfPokemons } = this.props;
        return (
            <div>
                <h2>PokemonSearch</h2>
                <div>User {name} has {numberOfPokemons} pokemons</div>
                {/* <div>User {name} {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span> }</div> */}
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










































































