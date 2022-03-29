import { useState, useEffect } from "react"



const HouseA = ({houseSelect}) =>  {

    const [number, setNumber] = useState(2775174748);

    // The houseResult has hardcoded default data. It can improve by displaying instructive message how to use the page when the "houseResult" is null. 
    const [houseResult, setHouseResult] = useState({
        "id": 2775174748,
        "name": "Prodej  chaty 25 m², pozemek 400 m²",
        "name_extracted": "Prodej chaty",
        "lat": 49.202728,
        "lon": 16.712067,
        "labels": {
          "parking_lots": "Parking lots"
        },
        "locality_labels": {
          "candy_shop": "Candy shop",
          "natural_attraction": "Natural attraction",
          "playground": "Playground",
          "small_shop": "Small shop",
          "tavern": "Tavern",
          "theater": "Theater",
          "vet": "Vet",
          "bus_public_transport": "Bus public transport",
          "post_office": "Post office",
          "kindergarten": "Kindergarten",
          "drugstore": "Drugstore",
          "restaurant": "Restaurant",
          "medic": "Medic",
          "atm": "Atm",
          "sports": "Sports",
          "shop": "Shop",
          "school": "School",
          "train": "Train",
          "tram": "Tram"
        },
        "company_name": "REALPROGRES BRNO",
        "company_logo": "https://estate-comparison.codeboot.cz/images/d48-a-sdn-cz/d_48/c_img_H_B/bbLVkv-png-fl-res-140-140-3-ffffff.png",
        "locality": "Zlámanky, Brno - Líšeň",
        "images": [
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_E_Bi/u30wCa-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg",
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_E_Bh/UFeB08k-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg",
          "https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_G_Bg/aI8kad-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg"
        ],
        "is_new": false,
        "prize_czk": 950000,
        "building_area": "25",
        "land_area": "400"
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

export default HouseA