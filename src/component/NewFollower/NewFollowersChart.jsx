import {useState} from 'react';
// import heading1 from './Heading1';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import Heading from './Heading';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function NewFollowersChart() {
  const [data, setData]= useState({
   data:{
    labels:["1","2", "3", "4","5", ],
    datasets:[
      {
        label:"First Dataset",
        
        data:[1,3,2,5,1 ],
        backgroundColor:'rgba(84, 204, 139, 0.35) ',
        borderColor:'rgb(84, 204, 139)',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'rgb(153, 255, 153)',
        pointBackgroundColor:'#fff',
        showLine:true,
        display:false,
        
       
      }
    ],
  },
options:{
    
    plugins:{
      
      legend:false,
    
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
      },  
    }
  }
   
  })
  return (
    <div className='xs:h-[200px]  2xl:w-[240px] 2xl:h-[200px] xl:w-[250px] xl:h-[200px]  xs:w-[150px] lg:w-[160px] lg:h-[160px] sm:w-[220px] sm:h-[220px] bg-white drop-shadow-md rounded-2xl relative'>   
    <div className="App" >
<Heading/>
      <Line data={data.data} options={data.options}>Hello</Line>
    </div>
    </div>
 
  );
}

export default NewFollowersChart;