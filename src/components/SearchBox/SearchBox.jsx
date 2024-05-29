import Navbar from "../Navbar/Navbar";
import "./SearchBox.css";

function SearchBox() {
    return (
        <div id="search-box-wrapper" className="d-flex flex-column">
            <Navbar />

            <div id="search-box-text" className="d-flex flex-column">
                <span>Are You a Supplier?</span>
                <span>Explore Matching Opportunities.</span>
            </div>

            <form id="search-form" className="d-flex">

                <div id="service-search-wrapper" className="d-flex">
                    <div id="service-search">
                        <div id="suitcase-vector-wrapper" className="d-flex flex-column">
                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.125 4.6875C5.642 4.6875 5.25 4.2955 5.25 3.8125V2.5H1.75V3.8125C1.75 4.2955 1.358 4.6875 0.875 4.6875C0.392 4.6875 0 4.2955 0 3.8125V2.5C0 1.53487 0.784875 0.75 1.75 0.75H5.25C6.21513 0.75 7 1.53487 7 2.5V3.8125C7 4.2955 6.608 4.6875 6.125 4.6875Z" fill="#E7760D" />
                            </svg>
                            <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 2.78125V4.785L10.71 8.215C10.64 8.24125 10.57 8.25 10.5 8.25C10.43 8.25 10.36 8.24125 10.29 8.215L0 4.785V2.78125C0 1.45125 1.07625 0.375 2.40625 0.375H18.5938C19.9237 0.375 21 1.45125 21 2.78125Z" fill="#E7760D" />
                            </svg>
                            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1213 3.45748C10.9637 3.51873 10.7362 3.56248 10.5 3.56248C10.2638 3.56248 10.0362 3.51873 9.82625 3.43998L0 0.16748V6.84373C0 8.17373 1.07625 9.24998 2.40625 9.24998H18.5938C19.9237 9.24998 21 8.17373 21 6.84373V0.16748L11.1213 3.45748Z" fill="#E7760D" />
                            </svg>
                        </div>

                        <div id="service-placeholder-div">
                            <input type="text" placeholder="Search your required service here" />
                        </div>
                    </div>
                </div>

                <div id="location-search-wrapper">
                    <div id="location-vector-wrapper">
                        <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 0C4.03917 0 0.414062 3.6252 0.414062 8.08594C0.414062 9.59531 0.831926 11.0643 1.627 12.3311L7.95186 22.6817C8.05977 22.8569 8.22148 22.9648 8.4102 22.9917C8.66617 23.0321 8.94931 22.9244 9.09751 22.6683L15.4405 12.2232C16.1951 10.9834 16.5859 9.54145 16.5859 8.08594C16.5859 3.6252 12.9608 0 8.5 0ZM8.5 12.1289C6.23603 12.1289 4.45703 10.2961 4.45703 8.08594C4.45703 5.86226 6.27632 4.04297 8.5 4.04297C10.7237 4.04297 12.543 5.86226 12.543 8.08594C12.543 10.2826 10.791 12.1289 8.5 12.1289Z" fill="#E7760D" />
                        </svg>
                    </div>

                    <div id="location-input-div">
                        <div id="location-placeholder-div">
                            <input type="text" placeholder="Search your desired location here" />
                        </div>
                    </div>
                </div>

                <button>
                    <span>Search</span>
                </button>
            </form>

            <div id="requirement-post-text">
                <span>Are you a buyer?&nbsp;&nbsp;&nbsp;</span>
                <span>Click here if you are looking to post a requirements</span>
            </div>
        </div>
    )
}

export default SearchBox;