import { useEffect, useState } from "react";

function Search({ setResults }) {

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8080/jobs")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((job) => {
        return (value && job && job.jobTitle && job.jobTitle.toLowerCase().includes(value))
      })
      setResults(results);
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

 
  return (
    <div className="searchWrapper">
      <form className="searchContainer">
        <input 
          type="text" 
          placeholder="Search..." 
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />



        {/* <button type="submit" onClick={async (e)=> { 
          e.preventDefault(); 
          const url = "http://localhost:8080/companies/2/jobs"
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.error(error.message);
          }
          }}>Search</button> */}
      </form>
    </div>
  );
}

export default Search