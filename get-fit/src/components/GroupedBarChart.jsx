import React from 'react';
import { Bar } from 'react-chartjs-2';



const GroupedBar = (props) => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
          {
            label: '# Calorie Burned',
            data: [props.calorieBurned, 129, 233, 315, 222, 123],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: '# Calorie Earnes',
            data: [props.calorieEarned, 35, 230, 335, 231, 114],
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: '# Difference',
            data: [props.calorieEarned-props.calorieBurned, 120, 133, 315, 222, 230],
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
return (
  <>
    <div className='header'>
      <h1 className='title'>Calories</h1>

    </div>
    <Bar data={data} options={options} />
  </>
)};

export default GroupedBar;
