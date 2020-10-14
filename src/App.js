import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './components/search';
import ContainerSearch from './components/containerSearch';



function App() {
  
  const [searched, setSearched] = useState('');
  const [results, setResults] = useState([]);
  var [page, setPage] = useState(1)

//Fetch API de Pixabay
  const consultAPI = async () => {
    const url = `https://pixabay.com/api/?key=18695046-a8b1de73d33432f98b8e4e1a4&q=${searched}&page=${page}`;
    const res = await fetch (url);
      const resJson = await res.json();
      setResults(resJson.hits);
  }

  useEffect(() => {
    if (searched.length > 2) {
    consultAPI();
    }
  }, [searched])
  
  
  //Pagination
  const handleNext = () => {
    scroll();
    setPage(page+=1);
  }
  
  const handlePrevious = () => {
    if (page > 0) {
      setPage(page-=1);
      scroll();
    }
  }

  useEffect(() => {
    if (page > 0) {
    consultAPI();
    }
  }, [page])
  
  //Scroll
  const scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView({behavior:'smooth', block:'start'});
  }

  return (
    <div>
      <div className="app container">
        <div className="jumbotron">
          <h1 className="text-center">Image Search <span role="img" aria-labelledby="cristal-ball">🔮</span></h1>
          <Search searched={setSearched} />
        </div>
        <div>
          <ContainerSearch 
          results={results}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
