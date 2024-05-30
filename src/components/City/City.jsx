import { useState } from "react";
import "./City.css";
import RightArrow from "../RightArrow/RightArrow";


function City({ cityName }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            id="city-container"
            className= "d-flex align-items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span id="city-name">{cityName}</span>
            {
                isHovered &&
                <div id="arrow-container">
                    <RightArrow />
                </div>
            }
        </div>
    )
}

export default City;