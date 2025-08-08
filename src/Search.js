import { useState } from "react";

function Search({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:8080/jobs/search?keyword=${encodeURIComponent(value)}`)
      .then((r) => r.json())
      .then((json) => setResults(json))
      .catch(console.error);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="searchWrapper">
      <form 
        className="searchContainer"
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          type="text" 
          placeholder="Search for jobs..." 
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />    
      </form>
    </div>
  );
}

export default Search;