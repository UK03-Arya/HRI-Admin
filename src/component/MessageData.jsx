import React from "react";
import MessageScreen from "./MessageScreen";
import P1 from "../Assets/P1.png";
import P2 from "../Assets/P2.png";
import P3 from "../Assets/P3.png";
import P4 from "../Assets/P4.png";
import P5 from "../Assets/P5.png";


const MessageData = () => {
  const FirstRow1 = [
    {
      P: P1,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },

    {
      P: P2,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
    {
      P: P1,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
    {
      P: P3,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
    {
      P: P4,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },

    {
      P: P5,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
    {
      P: P1,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
    {
      P: P3,
      UserN: "@DercoMani",
      LastSeen: "2 min ago",
      Comment: "Commented Yes, I have been there and i would love to go",
    },
  ];
  return (
    <div className="">
      <div className="  flex flex-col space-y-4 mt-4  ">
        {FirstRow1.map((elem, index) => (
          <MessageScreen
            key={index}
            P={elem.P}
      UserN={elem.UserN}
      LastSeen={elem.LastSeen}
      Comment={elem.Comment}
            
          />
        ))}
      </div>
    </div>
  );
};

export default MessageData;
