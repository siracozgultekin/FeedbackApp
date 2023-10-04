import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  return (
    <main className="indicator w-[85%] ">
      <span className="indicator-item indicator-start badge badge-primary h-6 w-4">
        {params.rate}
      </span>
      <div className="grid w-full h-32 bg-base-300 place-items-center">
        {params.review}
      </div>
    </main>
  );
};

export default DetailPage;
