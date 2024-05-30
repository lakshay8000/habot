import { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Homepage.css";
import City from "../../components/City/City";

function Homepage() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    
    function handleSignup() {
        setOverlayVisible(true);

        // Reset the state after the animation duration
        setTimeout(() => {
            setOverlayVisible(false);
        }, 300);
    }

    return (
        <div id="homepage-wrapper">
            <SearchBox />

            <div id="heading-wrapper">
                <span id="heading-text">Ready to dive into HABOT?</span>
            </div>

            <section id="description">
                Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
            </section>
            
            <button id="signup-button" className="d-flex justify-content-center align-items-center" onClick={handleSignup}>
                <span>Sign up Today !</span>
                <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.7885 7.52684L24.5159 0.254223C24.2547 -0.050834 23.7956 -0.0863957 23.4905 0.174912C23.1855 0.436157 23.1499 0.895274 23.4112 1.20033C23.4356 1.22877 23.4621 1.25533 23.4905 1.27964L29.5195 7.31591H0.727237C0.325619 7.31591 0 7.64153 0 8.04321C0 8.44489 0.325619 8.77045 0.727237 8.77045H29.5195L23.4905 14.7994C23.1855 15.0606 23.1499 15.5198 23.4112 15.8248C23.6725 16.1299 24.1316 16.1654 24.4366 15.9041C24.4651 15.8798 24.4916 15.8533 24.5159 15.8248L31.7886 8.5522C32.0705 8.26864 32.0705 7.81052 31.7885 7.52684Z" fill="white" />
                </svg>
            </button>
            
            {overlayVisible && <div className="overlay"></div>}
            
            <div id="cities-container" className="d-flex justify-content-between align-content-between flex-wrap">
                <City cityName={"Abu Dhabi"} />
                <City cityName={"Dubai"} />
                <City cityName={"Sharjah & Ajman"} />
                <City cityName={"Fujairah"} />
                <City cityName={"Ras Al Khaimah"} />
                <City cityName={"Umm Al Quwain"} />
            </div>


        </div>
    )
}

export default Homepage;