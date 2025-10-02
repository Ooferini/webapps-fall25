import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

export default function App() {
  // the reason we want our images in state here
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = async (term) => {
    console.log(term);
    // first pass term isnt recieved yet in our api/searchImages
    const result = await searchImages(term);
    // console.log(result)
    setSearchTerm(term);
    setImages(result);
  };

  return (
    <div>
      <h3 style={{ fontFamily: 'Papyrus' }}>
        Enter a search term and hit the enter key to submit...
      </h3>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageList images={images} title={`Search result for ${searchTerm}`} />
    </div>
  );
}
