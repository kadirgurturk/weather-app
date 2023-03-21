import retrunIcon from "./Icons";

const Container = ({data}) =>{

    console.log(data.weather[0].main);

    return(
        <div className="container">
            <h3 className="title">{data.name}</h3>
            <div className="container-header">
                
                <p id="temp"> {data.main.temp} &deg;C </p>
                <p id="desc">{data.weather[0].description}</p>
            </div>
            
            <div className="ıcon">{retrunIcon(data.weather[0].main)}</div>
            
            <div className="container-footer">
                <div className="feet">
                    <span className="feels">{data.main.feels_like} &deg;C</span>
                    <span>Hissedilen</span>
                </div>
                <div className="feet">
                    <span className="humudity">%{data.main.humidity}</span>
                    <span> Nem</span>
                </div>
            </div>

        </div>
    )
}

export default Container;