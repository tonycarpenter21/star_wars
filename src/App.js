import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('')
  const [manufacturer, setManufacturer] = useState('All')

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => console.error(err))
  }, [])

  const filteredShips = (data, selectedManufacturer) => {
    if (manufacturer === "All") {
      return data
    } else {
      const filteredData = data.filter(item => item.manufacturer.includes(selectedManufacturer))
      return filteredData
    }
  }

  console.log(filteredShips(data, manufacturer))

  return (
    <div className="App">
        <h1>Please Pick a Manufacturer:</h1>
        <select onChange={(event) => setManufacturer(event.target.value)} value={manufacturer}>
          <option key='All' value='All'>Show All Starships</option>  
          {data.length === 0 ? <option>no data</option> : data.map( (item, index) => <option key={index} value={item.manufacturer}>{item.manufacturer}</option>)}
        </select>
        <table>
          <tbody>
            <tr className="table-header-row">
              <th className="table-header top-left">Starship Name:</th>
              <th className="table-header">Manufacturer:</th>
              <th className="table-header">Cost (Credits):</th>
              <th className="table-header">Hyperdrive Rating:</th>
              <th className="table-header top-right">Passengers:</th>
            </tr>
            {filteredShips(data, manufacturer).length === 0 ? <tr><td>no data</td></tr> : filteredShips(data, manufacturer).map( (item, index) => {
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
