import { useState, useEffect } from "react"



const HouseB = ({houseSelect}) =>  {

    const [number, setNumber] = useState(1174359644);
    const [houseResult, setHouseResult] = useState({
        "id": 1174359644,
        "name": "Prodej  chalupy 96 m², pozemek 340 m²",
        "name_extracted": "Prodej chalupy",
        "lat": 49.072464,
        "lon": 16.346258,
        "labels": {
          "after_reconstruction": "After reconstruction",
          "basin": "Basin",
          "partly_furnished": "Partly furnished"
        },
        "locality_labels": {
          "candy_shop": "Candy shop",
          "movies": "Movies",
          "natural_attraction": "Natural attraction",
          "playground": "Playground",
          "small_shop": "Small shop",
          "tavern": "Tavern",
          "vet": "Vet",
          "drugstore": "Drugstore",
          "medic": "Medic",
          "kindergarten": "Kindergarten",
          "atm": "Atm",
          "bus_public_transport": "Bus public transport",
          "sports": "Sports",
          "restaurant": "Restaurant",
          "school": "School",
          "post_office": "Post office",
          "shop": "Shop",
          "train": "Train"
        },
        "company_name": null,
        "company_logo": null,
        "locality": "Ivančice - Budkovice, okres Brno-venkov",
        "images": [
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_QI_I0/oeSCNw-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg",
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_QL_JN/bCcCNN-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg",
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_QI_I0/1c9CNx-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg"
        ],
        "is_new": false,
        "prize_czk": 2500000,
        "building_area": "96",
        "land_area": "340"
      });


    const fetchHouse = async () => {
        const response = await fetch(
            `https://estate-comparison.codeboot.cz/detail.php?id=${number}`);
            console.log(response)
        const data = await response.json();
        data  && setHouseResult(data)
       };


    useEffect(()=> {
    fetchHouse()
    } ,[number])




console.log(number)
console.log(houseResult)

    return (
        <div 
        onClick={() => {
            setNumber(houseSelect)
        }}
        >
                  <div>
            <img className = "house_image" src={houseResult.images[1]}/>  
          </div>

            <h3>{houseResult.name}</h3>

            <div className="house-data-wrap">
              <div className="house-data">
                <h2 className="left-text">Price </h2>      
                <h2 className="right-text">{houseResult.prize_czk} Kč</h2>

              </div>
              
              <div className="house-data">
              <h2 className="left-text">Locality     </h2> 
                <h2 className="right-text"> {houseResult.locality}</h2>

              </div>

              <div className="house-data">
              <h2 className="left-text">Floor area       </h2> 
                <h2 className="right-text"> {houseResult.building_area} m²</h2>
              </div>

              <div className="house-data">
              <h2 className="left-text">Land area                  </h2> 
                <h2 className="right-text"> {houseResult.land_area} m²</h2>
              </div>
       
            </div>
            <div className="logo">
              <img  className = "logo_image" src={houseResult.company_logo}/>
              <h2 className="logo_name">{houseResult.company_name}</h2>

            </div>
       


        </div>
    )

}


export default HouseB