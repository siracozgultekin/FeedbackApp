import React from "react";

const Rate = ({ rateValue }) => {
  return (
    <div className="container flex justify-center my-2">
      <div className="row">
        <div className="col-xs-12 flex flex-col text-center">
          <p className="page-header">1 is bad, 5 is perfect! </p>
          <div className="chart-scale">
            <button
              className="btn btn-scale btn-scale-desc-1"
              value={1}
              onClick={rateValue}
            >
              1
            </button>
            <button
              value={2}
              onClick={rateValue}
              className="btn btn-scale btn-scale-desc-3"
            >
              2
            </button>
            <button
              value={3}
              onClick={rateValue}
              className="btn btn-scale btn-scale-desc-5"
            >
              3
            </button>
            <button
              value={4}
              onClick={rateValue}
              className="btn btn-scale btn-scale-desc-7"
            >
              4
            </button>
            <button
              value={5}
              onClick={rateValue}
              className="btn btn-scale btn-scale-desc-9"
            >
              5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
