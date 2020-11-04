const request = require('request');


const args = (process.argv.length > 2) ? process.argv.slice(2) : '';
// if no breed provided
if (args === '') {
  console.log('No search query provided');
  return;
}

const BREED = args[0]; // saving the breed provided in the arguments

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${BREED}`; // url query to search for the breed


request(URL, (error, response, body) => {

  if (error) {
    console.log(`Erorr: ${error}`);
  } else {
    let data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Error: requested breed is not found');
    } else {
      console.log(`\n Breed Description: \n${data[0].description}\n`);
    }
  }
});
