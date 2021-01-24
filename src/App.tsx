import './App.css';
import PokemonSearch from './components/PokemonSearch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>App</h2>
        <PokemonSearch name='John' numberOfPokemons={5} />
      </header>
    </div>
  );
}

export default App;
