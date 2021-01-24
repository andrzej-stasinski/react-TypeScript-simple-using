import './App.css';
import PokemonSearch from './components/PokemonSearch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonSearch nameUser='John can choose pokemon:' />
      </header>
    </div>
  );
}

export default App;
