import Footballer from "./components/Footballer.jsx";
import { footballers } from "./data.js";

function App() {
  return (
    <div className="app">
      <h1>Footballer Stats</h1>
      <div className="card-container">
        { footballers.map( (footballer) => (< Footballer key={footballer.id} player={footballer} />) ) }
      </div>
    </div>
  );
}

export default App;