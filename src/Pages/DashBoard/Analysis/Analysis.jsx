import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import OverView from "./OverView/OverView";
import Ratings from "./Ratings/Ratings";
import OverAll from "./OverAll/OverAll";
import Strength from "./Strength/Strength";
import AreaOfImprovement from "./AreaOfImprovement/AreaOfImprovement";
import Recomandation from "./Recomandation/Recomandation";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import StackedColumnsChart from "../../../Components/StackedColumnsChart/StackedColumnsChart";
import Average from "./Average/Average";

const Analysis = () => {
  const [response, setResponse] = useState({});
  const [aboutResponse, setAboutResponse] = useState({});
  const [strength, setStrength] = useState([]);
  const [average, setAverage] = useState([]);
  const [haveToImprove, setHaveToImprove] = useState([]);
  const { startedAt, studentEmail, takenTimeToFinish, totalMark } = response;
  useEffect(() => {
    const responseString = localStorage.getItem("response");
    const responseParse = JSON.parse(responseString);

    setResponse(responseParse);
    setAboutResponse(responseParse?.aboutResponse);
    console.log("responseParse: ", responseParse);
    console.log("aboutResponse: ", responseParse?.aboutResponse);
  }, []);
  useEffect(() => {
    setStrength([]);
    setAverage([]);
    setHaveToImprove([]);
    aboutResponse?.successRate?.forEach((eachRes) => {
      if (eachRes?.successRate > 70) {
        setStrength((prev) => [...prev, eachRes]);
      } else if (eachRes?.successRate > 50) {
        setAverage((prev) => [...prev, eachRes]);
      } else {
        setHaveToImprove((prev) => [...prev, eachRes]);
      }
    });
  }, [aboutResponse]);
  const xxx = () => {
    console.log("strength: ", strength);
    console.log("average: ", average);
    console.log("haveToImprove: ", haveToImprove);
  };
  const data = [
    {
      name: "Correct",
      data: [20, 30, 40],
    },
    {
      name: "Incorrect",
      data: [30, 40, 50],
    },
    {
      name: "Not Attempt",
      data: [10, 20, 30],
    },
  ];
  return (
    <div className="p-16">
      <ProfileInfo />

      <button className="px-2 py-2 mx-4 my-8 float-right rounded-xl bg-green-300 font-medium font-poppins">
        Review Answer
      </button>

      {/* <button className='px-2 py-2 mx-4 my-8 float-right rounded-xl bg-green-300 font-medium font-poppins'>Review Answer</button> */}

      <OverView aboutResponse={aboutResponse} totalMark={totalMark} />
      {/* <OverAll /> */}
      {/* <Ratings /> */}
      <div>{strength?.length > 0 && <Strength strength={strength} />}</div>
      <div>
        {haveToImprove?.length > 0 && (
          <AreaOfImprovement haveToImprove={haveToImprove} />
        )}
      </div>
      <div>{average?.length > 0 && <Average average={average} />}</div>

      {/* <AreaOfImprovement /> */}
      {/* <StackedColumnsChart data={data} /> */}
      {/* <Recomandation /> */}
      {/* <LeaderBoard /> */}

      <h1 onClick={xxx}>xxxxxxxxxxxxxxx</h1>
    </div>
  );
};

export default Analysis;
