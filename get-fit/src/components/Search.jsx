import { useEffect, useState } from "react";
import axios from "axios";
import { secURL } from "../services";
// import { Doughnut } from 'react-chartjs-2';
import PieChart from "./PieChart";

function Search() {
  const [search, setSearch] = useState("chicken");
  const [input, setInput] = useState("");
  const [foodInfo, setFoodInfo] = useState([]);
  useEffect(() => {
    const getNutrition = async () => {
      const response = await axios.get(`${secURL}&ingr=${search}`);
      setFoodInfo(response.data.hints);
      // console.log(foodInfo);
    };
    getNutrition();
  }, [search]);
  // console.log(foodInfo.hints);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className='search'>
          <div className="correctness">
        {foodInfo.map((every) => (
          <div  className='comment'>
              <div className='infoOfNutrition'>
            
              <h4>{every.food.label}</h4>
            <img src={every.food.image} />
            
            </div>
            <hr />
            <div className='nutritions'>
            <h6>Energy:{every.food.nutrients.ENERC_KCAL}Kcal</h6>
            <h6>Protein:{every.food.nutrients.PROCNT}gram</h6>
            <h6>Total lipid (fat) :{every.food.nutrients.FAT}gram</h6>
            <h6>
              Carbohydrate, by difference:{every.food.nutrients.CHOCDF}Gram
            </h6>
            <h6>Dietary Fiber:{every.food.nutrients.FIBTG}gram</h6>
            </div>
            <hr />
            <PieChart foodNutrition={every.food} />
            {console.log(every.food)}
          </div>
        ))}
        </div>
        
        <div className='commentss'>
       
        <input
          type="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        
        <button type="submit">Search for the food and Catch the Calories!</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
