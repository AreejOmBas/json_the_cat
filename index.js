const { fetchBreedDescription } = require('./breedFetcher');

const breedName = (process.argv.length > 2) ? process.argv[2] : '';

// if no breed provided
if (!breedName) {
  console.log('No breed name provided');
  return;
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`\n Breed Description: \n${desc}\n`);
  }
});