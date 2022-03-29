// The horizontal list of houses. 

const List = ({houseResult, setHouseSelect}) =>  {

    // console.log(houseResult)

    return (
        <>

           <div className="list"


                onClick={   
                ()=> {setHouseSelect(houseResult.id)}
                }>
                
                <div className="house-card">
                
                    <img className = "list_image" src={houseResult.images[1]}/>

                    <h3 className="list_text">{houseResult.name_extracted} {houseResult.locality}</h3>

                </div>

           </div>
        </>
            );
}

export default List