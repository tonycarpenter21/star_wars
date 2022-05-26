import logo from './logo.svg';
import './App.css';
import fetchedStarshipData from './apiCalls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {fetchedStarshipData()} */}
      </header>
    </div>
  );
}

// create a simple web app containing a `<select>` input to allow a user to select a Starship `manufacturer`. 
// In a `<table>` display a list of all Starships with the selected `manufacturer`. 
// If no `manufacturer` is selected, display all starships in the table.

export default App;
