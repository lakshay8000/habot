import { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Homepage.css";
import City from "../../components/City/City";
import RightArrow from "../../components/RightArrow/RightArrow";
import VideoBuyer from "../../components/VideoBuyer/VideoBuyer";
import VerifiedBox from "../../components/VerifiedBox/VerifiedBox";
import WhatWeOfferBox from "../../components/WhatWeOfferBox/WhatWeOfferBox";
import Footer from "../../components/Footer/Footer";

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
                <RightArrow />
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

            <VideoBuyer />

            <VerifiedBox />

            <WhatWeOfferBox />

            <Footer />
            
        </div>
    )
}

export default Homepage;