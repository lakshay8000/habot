import CheckedIcon from "../CheckedIcon/CheckedIcon";
import "./VideoBuyer.css";

function VideoBuyer() {
    return (
        <div id="video-buyer-wrapper">
            <div id="video-thumbnail-container">
                <img src="../../../public/images/habotVideoThumbnail.jpeg" alt="video-thumbnail" />
            </div>
            <div id="play-icon-container">
                <svg width="107" height="76" viewBox="0 0 107 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M84.2177 0H22.0758C9.88367 0 0 9.88366 0 22.0758V53.1402C0 65.3323 9.88367 75.216 22.0758 75.216H84.2177C96.4099 75.216 106.294 65.3323 106.294 53.1402V22.0758C106.294 9.88366 96.4099 0 84.2177 0ZM69.288 39.1194L40.2222 52.982C39.4477 53.3514 38.5531 52.7867 38.5531 51.9288V23.337C38.5531 22.4669 39.4712 21.9029 40.2473 22.2962L69.3131 37.0253C70.1773 37.4632 70.1623 38.7025 69.288 39.1194Z" fill="#F61C0D" />
                </svg>
            </div>

            <div id="buyer-text-container">
                <span>Buyer</span>
                <div className="orange-rectangle"></div>
            </div>
            <span id="supplier-text">Supplier</span>

            <div id="checked-icon-1">
                <CheckedIcon />
            </div>

            <div id="checked-icon-2">
                <CheckedIcon />
            </div>

            <div id="checked-icon-3">
                <CheckedIcon />
            </div>

            <div id="bullet-points-container" className="">
                <span>Post your requirements.</span>
                <span>Sit back for multiple suppliers to contact you.</span>
                <span>Choose among the suppliers based on the ratings and reviews.</span>
            </div>
        </div>
    )
}

export default VideoBuyer;