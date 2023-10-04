import React from "react";
import { Link, useParams } from "react-router-dom";
import DetailPage from "./detailPage";

const Card = ({ review, rate }) => {
  return (
    <Link to={`/detail/${rate}/${review}`} className="indicator w-[85%] ">
      <span className="indicator-item indicator-start badge badge-primary h-6 w-4">
        {rate}
      </span>
      <div className="grid w-full h-32 bg-base-300 place-items-center">
        {review}
      </div>
    </Link>
    //eski hali:
    // <div className="bg-white m-3   h-[33%] rounded-md flex flex-col items-center">
    //   <div className="flex  text-start  w-[100%] rounded-full mb-3 h-[15%] justify-between">
    //     <div className=" flex justify-center items-center bg-red-300 rounded-r-full h-[50px] w-[70px] font-bold">
    //       rate gelcek
    //     </div>
    //     <div></div>
    //   </div>
    //   <div className="flex rounded-lg bg-slate-100 p-2  w-[98%] h-[75%]">
    //     {review}
    //   </div>
    // </div>
  );
};

export default Card;
