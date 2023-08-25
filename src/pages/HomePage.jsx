import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav>
      <Link to="/beers">
        <img src="src/assets/beers.png" alt="beersImg" width={300} />
        <h3>All Beers</h3>
      </Link>
      <br />
      <Link to="/random-beer">
        <img src="src/assets/random-beer.png" alt="beersImg" width={300} />
        <h3>Random Beers</h3>
      </Link>
      <br />
      <Link to="/new-beer">
        <img src="src/assets/new-beer.png" alt="beersImg" width={300} />
        <h3>New Beer</h3>
      </Link>
    </nav>
  );
}

export default HomePage;
