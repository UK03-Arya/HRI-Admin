import React from "react";
import AddDataMap from "./AddDataMap";
import AddDataImg from "../Assets/AddDataImg.png";
import StarRating from "./RatingStar";
import Team from "../Assets/Team.png";
import Save from "../Assets/Save.png";
import Watch from "../Assets/Watch.png";



const AddData = () => {
  const FirstRow1 = [
    {
     img:AddDataImg,
     CourseN:"The Prototype Basic",
     Name:"Nazneen Husain",
     Star:<StarRating/>,
     StarRating:"4.8",
     TotalRating:"120 rating",
     team:Team,
     teamNumber:"2345",
     Learn:"Learner",
     save:Save,
     Number:"5",
     Course:"Courses",
     Watch:Watch,
     Week:"23 Weeks Ago"


     
    },
  
    {
      img:AddDataImg,
     CourseN:"The Prototype Basic",
     Name:"Nazneen Husain",
     Star:<StarRating/>,
     StarRating:"4.8",
     TotalRating:"120 rating",
     team:Team,
     teamNumber:"2345",
     Learn:"Learner",
     save:Save,
     Number:"5",
     Course:"Courses",
     Watch:Watch,
     Week:"23 Weeks Ago"
      
     },
    
  ];
  return (
    <div className="">
    
      <div className="  flex flex-col flex-wrap space-y-4 mt-4  ">
        {FirstRow1.map((elem, index) => (
          <AddDataMap
            key={index}
           img={elem.img}
           
     CourseN={elem.CourseN}
     Name={elem.Name}
     Star={elem.Star}
     StarRating={elem.StarRating}
     TotalRating={elem.TotalRating}
     team={elem.team}
     teamNumber={elem.teamNumber}
     Learn={elem.Learn}
     save={elem.save}
     Number={elem.Number}
     Course={elem.Course}
     Watch={elem.Watch}
     Week={elem.Week}
              





          />
        ))}
      </div>
    </div>
  );
};

export default AddData;
