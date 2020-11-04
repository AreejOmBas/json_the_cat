const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // url query to search for the breed
  
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let data = JSON.parse(body);
      if (data.length === 0) {
        error = 'No Description found';
        callback(error, []);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};


module.exports = {
  fetchBreedDescription
};
