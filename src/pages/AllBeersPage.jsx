import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

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

  return (
    <>
      {beers.map((eachBeer) => {
        return (
          <li key={eachBeer._id} className="beerCard">
            <Link to={`/beers/${eachBeer._id}`}>
              <img src={eachBeer.image_url} alt="beerImg" height={200} />
            </Link>
            <div>
              <h3>{eachBeer.name}</h3>
              <h5>{eachBeer.tagline}</h5>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default AllBeersPage;
