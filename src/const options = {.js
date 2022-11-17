const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ac6b1f1b2bmsh4f598a216b3acc2p1af414jsnebe50520f28f',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));