import "./VerifiedBox.css";

function VerifiedBox() {
    return (
        <div id="verified-box-wrapper">
            <div id="verified-box-heading-container">
                <span>Let Suppliers Find You</span>
                <div id="rect"></div>
            </div>
            <button className="d-flex justify-content-center align-items-center"><span>Get Verified</span></button>
        </div>
    )
}

export default VerifiedBox;