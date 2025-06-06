function Search() {

 
  return (
    <div className="searchWrapper">
      <form className="searchContainer">
        <input type="text" placeholder="Search..." />
        <button type="submit" onClick={async (e)=> { 
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
          }}>Search</button>
      </form>
    </div>
  );
}

export default Search