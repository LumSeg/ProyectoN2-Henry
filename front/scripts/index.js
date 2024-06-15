// /scripts/index.js

const axios = require('axios');
const renderCard = require('./renderCard');

axios.get('http://localhost:3000/movies')
  .then(response => {
    renderCard(response.data);
    })
    .catch(error => {
    console.error('Error fetching data:', error);
});


