import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navHome">
            <Link to="/">
                <img src="src/assets/home-icon.png" alt="homeIcon" />
            </Link>
        </nav>
    )

}

export default Navbar;
