import axios from 'axios';

// whenever you use await inside a function, that function must be flagged as async
const searchImages = async (term) => {
  // when using axios GET
  // first argument is the URL as a string
  // second argument is an options object
  // think of await like a "Dear JS, please don't keep executing the next line until we get this back"
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    // inside headers use your ACCESS KEY
    headers: {
      Authorization: 'Client-ID iHLzXKUk7RssHrQSopFB9piB4qKqDtmWcUvZR0mPJrY',
    },
    params: { query: term },
  });
  // this is the path to the key we actually want
  console.log(response.data.results);
  return response.data.results;
};

// if we had more than one function in the file, we'd need a named export
// the way you export should be a hint at how you import elsewhere
// export const {searchImages}
export default searchImages;
