import React from "react";

const cards = ({detail}) =>{
    console.log(detail);
    return(
        <div className="Meals">
            {!detail ? "No Meals to fetch yet": detail.map((curItems)=>{
                return(
                    <div>
                        <img src={curItems.strMealThumb}/>
                        <p></p>
                        <button></button>
                    </div>
                )
            })
            
            }
        </div>
    )

}

export default cards;