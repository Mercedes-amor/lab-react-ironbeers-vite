import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function AllBeersPage(props) {
    console.log("props", props)
  const [beers, setBeers] = useState(null);

  const [beersToRender, setBeersToRender] = useState(null);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      //   console.log("response.data", response.data);
      setBeers(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading === true) {
    return <h3>...loading</h3>;
  }

  if (beersToRender === null) {
    return setBeersToRender(beers);
  }
  return (
    <>
        <Search
        beers={beers}
        setBeersToRender={setBeersToRender}
      />

      {beersToRender.map((eachBeer) => {
        return (
          <li key={eachBeer._id} style={{ listStyle: "none" }}>
            <Link to={`/beers/${eachBeer._id}`} className="beerCard">
              <img src={eachBeer.image_url} alt="beerImg" height={200} />

              <div>
                <h3>{eachBeer.name}</h3>
                <h5>{eachBeer.tagline}</h5>
                <p>Created by: {eachBeer.contributed_by}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default AllBeersPage;
