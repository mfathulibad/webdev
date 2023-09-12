import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand">Secret Tiramisu</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="navbar-item">
                    <Link to="/" className={"nav-link"}>Home</Link>
                </li>
                <li class="navbar-item">
                    <Link to="/menu" className={"nav-link"}>Menu</Link>
                </li>
                <li class="navbar-item">
                    <Link to="/about" className={"nav-link"}>About</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
