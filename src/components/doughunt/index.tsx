import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

export const cycleData = [
  { color: "#4dbd98", time: "4hrs", desc: "coding" },
  { color: "#23b3e8", time: "8hrs", desc: "code review" },
  { color: "#052231", time: "1hr", desc: "QA review" },
  { color: "#f15832", time: "3hrs", desc: "idle time" },
  { color: "#3d43a2", time: "1hr", desc: "deployment" },
];

Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function Cycle() {
  return (
    <Doughnut
      datasetIdKey="cycle"
      data={{
        datasets: [
          {
            label: "cycle",
            data: cycleData.map((d) => d.time[0]),
            backgroundColor: cycleData.map((d) => d.color),
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
}
