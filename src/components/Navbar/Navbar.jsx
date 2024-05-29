import "./Navbar.css";

function Navbar() {

    return (
        <div id="navbar-wrapper" className="d-flex">
            <div id="logo-wrapper">
                <img src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6EPuIw3lZQptEXnI6QOFnUHYWQOvj22btEA-wzvO1rQ0t1Ts-As4ZyVmJVLGkx1GRAlFOzhuUvdMglyDeiP9vZVJPFpg7y7AZ8AvG1TJhetFxxmTOamZmLqUNyCViSwbXAz1WLdvM1aUiNJe0a30x7sZSSPa5xC9SePLt0HDXaMgS2LfcxxMvVu13bsqNGsdFqeYF2dJEjvNIo6zPXXMQqcqLWnzzCKn7OM8fj6j~SbF2Gv5EgZ~aaZ7ee0EQpjv5P~FV0o0mhqdmthPCuitelvOlq~kINV2dL7y5CGEC3SWnOIVB3v1JKCS41fH0NyXRjyRSfjkDzCQWDFKeiKKw__" alt="habot-logo" />
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
    )
}

export default Navbar;