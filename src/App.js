import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [manufacturer, setManufacturer] = useState('All')

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => console.error(err))
  }, [])

  const filteredShips = (data, selectedManufacturer) => {
    return manufacturer === "All" ? data : data.filter(item => item.manufacturer.includes(selectedManufacturer))
  }

  const tableHeaders = ["Starship Name", "Manufacturer", "Cost (Credits)", "Hyperdrive Rating", "Passengers"]

  const manufacturerOptions = ["Corellian Engineering Corporation", "Cyngus Spaceworks", "Fondor Shipyards", "Gallofree Yards, Inc.", "Imperial Department of Military Research", "Incom Corporation", "Koensayr Manufacturing", "Kuat Drive Yards", "Sienar Fleet Systems"]

  return (
    <div className="App">
        <h1>Please Pick a Manufacturer:</h1>
        <select onChange={(event) => setManufacturer(event.target.value)} value={manufacturer}>
          <option key="All" value="All">Show All Starships</option>  
          {manufacturerOptions.map( (option, index) => <option key={index} value={option}>{option}</option>)}
          {/* {data.length === 0 ? <option>LOADING...</option> : data.map( (option, index) => <option key={index} value={option.manufacturer}>{option.manufacturer}</option>)} */}
        </select>
        <table>
          <tbody>
            <tr className="table-header-row">
              {tableHeaders.map((header, index) => <th key={index} className="table-header">{header}</th> )}
            </tr>
            {filteredShips(data, manufacturer).length === 0 ? <tr><td>LOADING...</td></tr> : filteredShips(data, manufacturer).map( (item, index) => {
              return(
                <tr key={index}>
                  <td className="table-row">{item.name}</td>
                  <td className="table-row">{item.manufacturer}</td>
                  <td className="table-row">{item.cost_in_credits}</td>
                  <td className="table-row">{item.hyperdrive_rating}</td>
                  <td className="table-row">{item.passengers}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
