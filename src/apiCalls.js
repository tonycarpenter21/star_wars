const fetchedStarshipData = () => {
  return fetch("https://swapi.dev/api/starships", {"method": "GET"})
    .then(response => response.json().then((data) => data.results))
    .catch(err => {
      console.error(err);
    }
  )
}

export default fetchedStarshipData;