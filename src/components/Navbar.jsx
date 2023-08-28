import { Link } from "react-router-dom";
import homeIcon from "./../assets/home-icon.png"

function Navbar() {

    return (
        <nav className="navHome">
            <Link to="/">
                <img src={homeIcon} alt="homeIcon" />
            </Link>
        </nav>
    )

}

export default Navbar;
