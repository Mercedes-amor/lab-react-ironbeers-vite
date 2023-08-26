import { useState } from "react";

function Search(props) {
  const [queryInput, setQueryInput] = useState("");

  const handleSearch = (event) => {
    console.log("target.value", event.target.value);
    setQueryInput(event.target.value);
 

  const filteredArr = props.beers.filter((eachBeer) => {
    if (eachBeer.name.toLowerCase().includes(event.target.value.toLowerCase()) === true) {
      return true;
    } else {
      return false;
    }
  });

  console.log("filteredArr", filteredArr)
  props.setBeersToRender(filteredArr);

};
  return (
    <div>
      <form action="">
        <label htmlFor="query">Search beer</label>
        <input
          onChange={handleSearch}
          type="text"
          name="query"
          value={queryInput}
        />
      </form>
    </div>
  );
}

export default Search;
