import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = (props) => {
  const data = {
    labels: [`Energy`, 'Protein', 'Total lipid(fat)', 'Carbohydrate, by difference', 'Dietary Fiber'],
    datasets: [
      {
        label: '# of Votes',
        data: [props.foodNutrition.nutrients.ENERC_KCAL, props.foodNutrition.nutrients.PROCNT, props.foodNutrition.nutrients.FAT, props.foodNutrition.nutrients.CHOCDF, props.foodNutrition.nutrients.FIBTG],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
  <>
    <Pie data={data} />
  </>

  )};

export default PieChart;