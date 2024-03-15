import { Link } from "react-router-dom"
import { APP_LOGO_URL } from "../utils/constants"

export default Header = () => {
    return (
        <div className="header">
            <div>
                <img src={APP_LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <i className="fa-solid fa-house"></i>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-tags"></i>
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <Link to="/login">Sign in</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-circle-info"></i>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}