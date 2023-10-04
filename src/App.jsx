import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/card";
import DetailPage from "./components/detailPage";

function App() {
  const [reviewArr, setreviewArr] = useState(
    () => JSON.parse(localStorage.getItem("reviews")) || []
  );
  const [rate, setrate] = useState(0);
  const totalRates = reviewArr.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.rate);
  }, 0);

  const avgRate = reviewArr.length > 0 ? totalRates / reviewArr.length : 0;
  console.log(`typeof: ${typeof totalRates}`);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <main className="bg-slate-700 min-h-full">
              <Header title={"Feedback App"} />
              <Form setreviewArr={setreviewArr} reviewArr={reviewArr} />
              <div className=" flex flex-col items-center">
                <h3 className="m-3 font-bold text-white">
                  {" "}
                  Avg Rate:{avgRate}
                </h3>
                <div className=" bg-slate-400  container flex flex-col items-center gap-3  p-3">
                  {reviewArr.map(({ review, rate, id }) => (
                    <Card review={review} rate={rate} key={id} />
                  ))}
                </div>
              </div>
            </main>
          }
        ></Route>
        <Route path="/detail/:rate/:review" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
