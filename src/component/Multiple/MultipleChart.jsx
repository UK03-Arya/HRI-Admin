import React from 'react';
import {
  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register( CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

function MultiLineChart(){
  return(
    <React.Fragment>
<div className='flex bg-white drop-shadow-md rounded-2xl lg:w-[350px] 2xl:w-[500px] 2xl:h-[140px] lg:h-[120px] xs:w-[320px] sm:w-[480px] sm:h-[200px] xl:ml-10  xl:w-[520px] xl:h-[180px]  sm:ml-4 xs:mt-8 xs:ml-1 ms:ml-2 lg:mt-2 lg:ml-6'>
<div className='xs:w-[80px] mt-8 ml-3 sm:mt-10 sm:ml-10 lg:mt-5 xl:mt-16 2xl:mt-10 '>
<a href=""className=' text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Profile Visits</a><br/>
<a href=""className=' text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Link Clicks</a><br/>
<a href=""className=' text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Email Button</a>

</div>
      <div className='xs:h-[150px] 2xl:w-[250px] 2xl:h-[100px] xs:w-[160px] sm:w-[250px] lg:w-[180px] lg:h-[180px] xl:w-[280px] mt-8  '>
        <Line
      data = { {
        labels : ['1', '2', '3', '4', '5', '6', '7'],

  datasets: [
    {
      label: 'Dataset 1',
      data: [4,6,4.4,6,7,4,5],
      borderColor: 'rgb(255, 99, 132)',
      // backgroundColor:'rgb(255, 99, 132)',
       
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'rgb(153, 255, 153)',
        pointBackgroundColor:'#fff',
        showLine:true,
        display:true,  
    },
    {
      label: 'Dataset 2',
      data: [8,7,9,7,9,8,7],
      borderColor: 'rgb(84, 204, 139)',
      // backgroundColor:'rgb(53, 162, 235)',
       
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'rgb(153, 255, 153)',
        pointBackgroundColor:'#fff',
        showLine:true,
        display:true,  
     
    },

    {
      label: 'Dataset 3',
      data: [2,5,3,4,5,3,4],
      // backgroundColor:'rgba(84, 204, 139, 0.35) ',
        borderColor:'rgb(84, 204, 139)',
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'rgb(153, 255, 153)',
        pointBackgroundColor:'#fff',
        showLine:true,
        display:true,  
    
        

    },
  ],
}}

 options = {{
  responsive: true,
  interaction: {
    mode: 'index' ,
    intersect: false,
  },

  scales:{
      y:{
        grid:{
          display:false
        }
      },
      x:{
        grid:{
          display:false
        }
      }
  },
  stacked: false,
  plugins: {
    legend:false,
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },

  }}
        />
      </div>
      <div className='xs:w-[80px] 2xl:mt-10 mt-8 ml-4 sm:mt-12 lg:mt-6 xl:mt-16  '>
<a href=""className=' text-[10px] lg:text-[12px]  sm:text-[14px] font-bold text-black	'>22.1k</a><br/>
<a href=""className=' text-[10px] lg:text-[12px]  sm:text-[14px] font-bold text-black	'>1.7k</a><br/>
<a href=""className=' text-[10px] lg:text-[12px] sm:text-[14px]  font-bold text-black	'>592</a>

</div>
      </div>
    </React.Fragment>
  )
}
export default MultiLineChart
//   scales: {
//     y: {
//       type: 'linear'  ,
//       display: true,
//       position: 'left'  ,
//     },
//     y1: {
//       type: 'linear'  ,
//       display: true,
//       position: 'right'  ,
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };


// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       yAxisID: 'y',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       yAxisID: 'y1',
//     },
//   ],
// };

// export function MultiLineChart() {
//   return <Line options={options} data={data} />;
// }
