import { Link } from "react-router-dom"
import { APP_LOGO_URL } from "../utils/constants"

export default Header = () => {
    return (
        <div className="flex justify-between bg-[#FFF3C7]">
            <div>
                <img className="w-32" src={APP_LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex list-none">
                    <li className="mx-3 text-lg">
                        <i className=" mx-2 fa-solid fa-house"></i>
                        <Link className="font-bold" to="/">Home</Link>
                    </li>
                    <li className="mx-3 text-lg">
                        <i className="mx-2 fa-solid fa-tags"></i>
                        <Link className="font-bold" to="/offers">Offers</Link>
                    </li>
                    <li className="mx-3 text-lg">
                        <i className="mx-2 fa-solid fa-user"></i>
                        <Link className="font-bold" to="/login">Sign in</Link>
                    </li>
                    <li className="mx-3 text-lg">
                        <i className="mx-2 fa-solid fa-circle-info"></i>
                        <Link className="font-bold" to="/help">Help</Link>
                    </li>
                    <li className="mx-3 text-lg">
                        {/* <i className="fa-solid fa-circle-info"></i> */}
                        <Link className="font-bold" to="/grocery">Grocery</Link>
                    </li>
                    <li className="mx-3 text-lg">
                        <i className="mx-2 fa-solid fa-cart-arrow-down"></i>
                        <Link className="font-bold" to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}