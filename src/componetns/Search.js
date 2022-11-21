import { useState, useEffect } from "react";
const Search = () => {
    const [data, setData] = useState("mumbai");
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4d8fb5b93d4af21d66a2948710284366`
            const response = await fetch(url);

            const resJson = await response.json();
            console.log(resJson)
            setData(resJson.main);
        };
        fetchApi();

    }, [search])

    return (
        <>
            <div>
                <div className="inputdiv">
                    <h1 className="title"> React Wheather App</h1>
                    <input type="search" placeholder="Search city name here" className="inputsearch" onChange={(event) => { setSearch(event.target.value) }}></input>
                </div>

                {data ? (
                 <div>
                 <div className="display">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUijW8Pl6X57WSf5jgv0q00gtqFw0w0saJw&usqp=CAU" alt="" className="image1"></img>
                     <h1>City-{search}</h1>
                     <h1>{data.temp}°C</h1>
                     <div className="minmax">
                         <h2>Min-Temp <h4 > {data.temp_min}°C </h4></h2>
             
                    
                     <h2>Max-Temp<h4> {data.temp_max}°C </h4>  </h2>
                     
                     <h2>Humidity<h4> {data.humidity}</h4></h2>
                      
                     </div>
                    

                 </div>
                 </div>
                ) : (
                   <p>no data found</p>
                )}
            </div>

        </>

    )
}
export default Search;
