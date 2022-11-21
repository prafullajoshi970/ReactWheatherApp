import Search from "./componetns/Search";

// import { useState, useEffect } from 'react'


function App() {

  // const [data1, setData] = useState();
  // console.log(data1);
  // const apikey = '700cd2716d1ea414ff0fe1483e04908c';

  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${'delhi'}&appid=${apikey}`).then(
  //     (Response) => Response.json.main()

  //   ).then(
  //     (data1) => {
  //       console.log(data1);
  //       const arraydata = data1
  //       setData(arraydata)
  //     }
  //   )
  // }, [])
  return (
    <>
    <Search></Search>
   

    </>
        );
}

        export default App;
