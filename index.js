const { fetchBreedDescription } = require('./breedFetcher');

const breedName = (process.argv.length > 2) ? process.argv[2] : '';

// if no breed provided
if (!breedName) {
  console.log('No breed name provided');
  return;
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    throw error('Error fetch details:', error);
  } else {
    console.log(`${desc}`);
  }
});