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
                        <i className="fa-solid fa-tags"></i>
                        <a href="#">Offers</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <a href="#">Sign in</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-circle-info"></i>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <a href="#">Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}