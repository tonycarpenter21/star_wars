import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => console.error(err))
  }, [])

  console.log(data)

  return (
    <div className="App">
        <h1>Please Pick a Manufacturer:</h1>
        <select>
          <option key='All' value='All'>Show All Starships</option>  
          {data.length === 0 ? <option>no data</option> : data.map( item => <option key={item.manufacturer} value={item.manufacturer}>{item.manufacturer}</option>)}
        </select>
        <table>
          <tr className="table-header-row">
            <th className="table-header top-left">Starship Name:</th>
            <th className="table-header">Manufacturer:</th>
            <th className="table-header">Cost (Credits):</th>
            <th className="table-header">Hyperdrive Rating:</th>
            <th className="table-header top-right">Passengers:</th>
          </tr>
          {data.length === 0 ? <td>no data</td> : data.map( item => {
            return(
              <tr>
                <td className="table-row">{item.name}</td>
                <td className="table-row">{item.manufacturer}</td>
                <td className="table-row">{item.cost_in_credits}</td>
                <td className="table-row">{item.hyperdrive_rating}</td>
                <td className="table-row">{item.passengers}</td>
              </tr>
            )
          })}
        </table>
    </div>
  );
}

// In a `<table>` display a list of all Starships with the selected `manufacturer`. 


// from me
// style star wars like somehow? flying stars?
// logic for sort?

export default App;
