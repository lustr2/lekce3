const City = ({name, population, area, district, photo}) => {
    const vetsiMesto = (Number({area}).valueOf > 100 ? "item__done--tick" : "");
    return (
        <div className="mesta">
            <div>Nazev mesta: {name}</div>
            <div className="populace"> - populace: {population} </div>
            <div className={vetsiMesto}> - </div>
            <div> Okres: {district} - </div>
            <div> - <img src={photo}></img>  </div>
        </div>
    )
}
export default City;