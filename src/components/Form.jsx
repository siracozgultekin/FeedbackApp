import React, { useEffect, useState } from "react";
import Rate from "./Rate";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setreviewArr, reviewArr }) => {
  const [review, setreview] = useState();
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewArr));
  }, [reviewArr]);
  const [rate, setrate] = useState(0);
  useEffect(() => {
    console.log(`rate value: ${rate}`);
  }, [rate]);
  function rateValue(e) {
    e.preventDefault();
    console.log(e.target.value);
    setrate(e.target.value);
  }
  function HandleReview(e) {
    e.preventDefault();
    setreview(e.target.value);
  }
  function SubmitReview(e) {
    e.preventDefault();
    // setreviewArr([...reviewArr, review]);
    const id = uuidv4();
    const item = {
      id,
      review,
      rate,
    };

    const updatedReviewArr = [...reviewArr, item];
    setreviewArr(updatedReviewArr);
    // setreviewArr((arr) => {
    //   return [...arr, review];
    // });

    setreview("");
  }

  return (
    <form className="bg-gray-300 m-3   h-[33%] rounded-md flex flex-col items-center">
      <h2 className="font-semibold text">
        How would you rate your desert service with us?
      </h2>
      <Rate rateValue={rateValue} />
      <div className=" flex border-[1px] border-blue-950 rounded-lg h-[55%] w-[85%]">
        <input
          className="rounded-l-lg w-[800%]"
          type="text"
          name="review"
          placeholder="write your review"
          // value={review}
          onChange={(e) => HandleReview(e)}
        />

        <button
          type="submit"
          className="bg-slate-500 text-white ml-0 p-1 rounded-r-lg"
          onClick={SubmitReview}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
