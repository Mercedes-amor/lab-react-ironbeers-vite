import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log("response.data randomBeer", response.data);
      setRandomBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (randomBeer === null) {
    return <h3>...loading</h3>;
  }

  return (
    <div className="beerCard">
      <img src={randomBeer.image_url} alt="beerImg" height={200} />
      <div>
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeersPage;
