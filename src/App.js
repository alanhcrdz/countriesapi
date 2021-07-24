import './App.css';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
      <h2>Where in World?</h2>
      </header>
        <main className="content">
            <CardComponent />

        </main>

      </div>
    </div>
  );
}

export default App;
