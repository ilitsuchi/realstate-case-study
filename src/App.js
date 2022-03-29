import './style.scss';

import { useEffect, useState } from "react";

// Install Carousul library 
import Carousel from "react-elastic-carousel";

import List from './Components/List';
import Header from './Components/Header';
import HouseA from './Components/HouseA';
import HouseB from './Components/HouseB';


function App() {

        const [houseResults, setHouseResults ] = useState();
        const [houseSelect, setHouseSelect ] = useState(3933875804);

        const fetchHouses = async () => {
          const response = await fetch(
              `https://estate-comparison.codeboot.cz/list.php`);
          const data = await response.json();
          // const number = Math.floor(Math.random() * (data.length-10))
          data  && setHouseResults(data)
         };

        console.log(houseResults);
        console.log(houseSelect);

        useEffect(()=> {
        fetchHouses()
        } ,[])

        // Part of Carousel feature. It sets how many items are shown. 
        const breakPoints = [{ itemsToShow: 10 }];

        return (
          <div className='page'>
            
              <div className='Header'>
              <Header/>
              </div>

              <Carousel breakPoints={breakPoints}>
                    {houseResults &&
                    houseResults.map((houseResult) => (
                      <div key={houseResult.id}>
                      <List  
                      houseResult={houseResult}
                      setHouseSelect={setHouseSelect}
                      />
                      </div>
                ))}
              </Carousel>

              <div className='Houses'>

                  <div className='HouseA'>
                    <HouseA houseSelect={houseSelect} />  
                  </div>
                  <div className='HouseB'>
                    <HouseB houseSelect={houseSelect} />
                  </div>

              </div>

          </div>
        );
}

export default App;
