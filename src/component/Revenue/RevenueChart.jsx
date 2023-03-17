import {useState} from 'react';
import heading1 from './Heading1';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import Heading1 from './Heading1';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function RevenueChart() {
  const [data, setData]= useState({
   data:{
    labels:["1","2", "3", "4", "5", ],
    datasets:[
      {
        label:"First Dataset",
        
        data:[1,2,4,4,5 ],
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
    <div className='xs:h-[320px] 2xl:w-[400px] 2xl:h-[350px] xl:ml-4 xs:w-[320px] sm:w-[500px] sm:h-[400px] lg:w-[260px] lg:h-[300px] xl:w-[400px] xl:h-[400px] bg-white drop-shadow-md rounded-2xl xs:ml-1  ms:ml-2 relative'>   
    <div className="App" >
<Heading1/>
      <Line data={data.data} options={data.options}>Hello</Line>
    </div>
    </div>
 
  );
}

export default RevenueChart;