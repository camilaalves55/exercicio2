import './App.css';
import AlteradorTexto from './components/AteradorTexto';

function App() {
  let texto = "";
  return (
    <div className="App">
      <header className="App-header">
       <AlteradorTexto
        texto={texto}
       />
      </header>
    </div>
  );
}

export default App;
