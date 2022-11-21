const Display = (props) => {
    return (
        <div className="display">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUijW8Pl6X57WSf5jgv0q00gtqFw0w0saJw&usqp=CAU" alt="Forcast" className="image1"></img>
        <div><h3>city:{props.name}</h3></div>
        <div><h3>Temperature:{props.temp}</h3></div>
       
        </div>
    )
}
export default Display;