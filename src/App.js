import './App.css';
import Routes from './routes/routes';
import { ContextProvider } from './hooks/useDataContext';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
      <h2>Where in World?</h2>
      </header>

        <main className="content">
          <ContextProvider>
            <Routes />
          </ContextProvider>
        </main>

      </div>
    </div>
  );
}

export default App;
