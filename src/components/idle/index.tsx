// import { Bar } from "react-chartjs-2";
// import {
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   Chart,
//   Legend,
//   LinearScale,
//   Title,
//   Tooltip,
// } from "chart.js";
import { useEffect, useState } from "react";
import "./idle.css";

// Chart.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

const apiData = [
  { idle: 2, productive: 4, label: "Coding" },
  { idle: 4, productive: 2, label: "Coding Review" },
  { idle: 1, productive: 3, label: "QA Review" },
];

const height = 20;

export default function Idle() {
  const [data, setData] = useState<typeof apiData>(apiData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(apiData);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="idle-container">
      {data.map((d) => (
        <div className="block">
          <div className="candle-container">
            <div
              className="idle candle"
              style={{
                height: d.idle * height + "px",
              }}
            ></div>
            <div
              className="productive candle"
              style={{ height: d.productive * height + "px" }}
            ></div>
          </div>
          <p className="label">{d.label}</p>
        </div>
      ))}
    </div>
  );
}

// <Bar
//   data={{
//     labels: ["Coding", "Code Review"],
//     datasets: desc2,
//   }}
// />
