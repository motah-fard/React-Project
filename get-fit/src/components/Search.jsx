
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { secURL, secConfig } from "../services";
import { Link } from "react-router-dom";
function Search () {
    const [search, setSearch] = useState("chicken");
    const [input, setInput]=useState("");
    const [foodInfo, setFoodInfo]=useState([])
    useEffect(()=>{
    const getNutrition = async () => {
        const response = await axios.get(`${secURL}&ingr=${search}`)
        setFoodInfo(response.data.hints);
        console.log(foodInfo);
      }
      getNutrition();
    },[search])
    console.log(foodInfo.hints);

  const handleSubmit =(e)=>{
      e.preventDefault();
      setSearch(input)
      setInput("");
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="input" value={input} onChange={(e)=> setInput(e.target.value)}></input>

                    <button type='submit'>Catch the Calories</button>

                {
                    foodInfo.map((every)=>(
                        <>
                        <h2>{every.food.label}</h2>
                        
                        <img src={every.food.image} alt={every.food.label}/>
                        <h6>{every.food.nutrients.ENERC_KCAL}KCAL</h6>
                        </>
                    ))
                }
            </form>
        </div>
    );
};

export default Search;