
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { secURL, secConfig } from "../services";
import { Link } from "react-router-dom";
function Search () {
    const [search, setSearch] = useState("cookie");
    const [input, setInput]=useState("");
    const [foodInfo, setFoodInfo]=useState([])
    useEffect(()=>{
    const getNutrition = async () => {
        const response = await axios.get(`${secURL}&ingr=${search}`)
        setFoodInfo(response.data);
        console.log(response.data);
      }
      getNutrition();
    },[search])
    // console.log(foodInfo);
  const handleSubmit =(e)=>{
      e.preventDefault();
      setSearch(input)
      setInput("");
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="input" value={input} onChange={(e)=> setInput(e.target.value)}></input>
                <Link to={`/${foodInfo.name}`}>
                    <button type='submit'>Catch the Calories</button>
                </Link>
                {
                    foodInfo.name ? (
                        <div>
                            <h5>{foodInfo.name}</h5>
                        </div>
                    ) : (
                        <h4>loading...</h4>
                    )
                }
            </form>
        </div>
    );
};

export default Search;