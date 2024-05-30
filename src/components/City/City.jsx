import "./City.css";

function City({cityName}) {
    return (
        <div className="city-container d-flex justify-content-center align-items-center">
            <span className="city-name">{cityName}</span>
        </div>
    )
}

export default City;