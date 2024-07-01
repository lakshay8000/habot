import "./Navbar.css";

function Navbar() {

    return (
        <div id="navbar-wrapper" className="d-flex">
            <div id="logo-wrapper">
                <img src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O-lkHZh5JqjTONAG7GLS9JDDq9ulXy8So3ojZRhYAWq015ZKkfeUBHJ5NDS0vhVo3-uSUZRD7jeb5qG3oCXxMtRS10ZkK3dRWIZjN7y7YXXFlivTs7WP67ELBoVtkuyfymL9Tq9OxkBW8j3Bu2~Uvn0fg8y7MvumygZQsgd-MNTQFCzKwIIgO5eT0ECJnsrItqp8UMctopelJ2pwPaD9GVS4zRYqk34G~h4mDt2djmOMoRkopgD2KkmLzWypqdHeqmv79X37OxaakXHj9x1rfQJ-HLiXqBZrcQkzaLTgNN9cMDRJvKysq1qBxk-~19uPVfkIKT49SFQFuTgt-peTsw__" alt="habot-logo" />
            </div>
            <header id="header-options" className="d-flex">
                <ul className="d-flex">
                    <li id="find-suppliers" className="d-flex">
                        <span>Find Suppliers</span>
                    </li>

                    <li id="find-service">
                        <span>Find Service Tags &nbsp;</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0866 0.999959L5.41991 5.66663L0.753245 0.999959" stroke="#6D6E71" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                </ul>

                <button>
                    Login / Sign Up
                </button>
            </header>
        </div>
    );
}

export default Navbar;