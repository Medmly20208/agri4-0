import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function ChartCurve(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData({
      labels: [
        ...props.HistoricalData.map((element) => {
          return element.LocalObservationDateTime.substring(11, 16);
        }),
      ],
      datasets: [
        {
          label: "Température",
          data: [
            ...props.HistoricalData.map((element) => {
              return element.Temperature.Metric.Value;
            }),
          ],
          backgroundColor: "blue",
          borderColor: "blue",
          tension: 0.4,
          fill: false,
          pointRadius: 0,
          pointStyle: "false",
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          showLine: props.temperature,
        },
        {
          label: "humidité",
          data: [
            ...props.HistoricalData.map((element) => {
              return element.RelativeHumidity;
            }),
          ],
          backgroundColor: "green",
          borderColor: "green",
          tension: 0.4,
          fill: false,
          pointRadius: 0,
          pointStyle: "rect",
          pointBorderColor: "green",
          pointBackgroundColor: "#fff",
          showLine: props.humidty,
        },
      ],
    });
  }, [props.HistoricalData, props.temperature, props.humidty]);

  return (
    <div className="App" style={{ width: "800px", height: "fit-content" }}>
      {data && (
        <Line
          data={{
            labels: [...data.labels],
            datasets: [...data.datasets],
          }}
        >
          Hello
        </Line>
      )}
    </div>
  );
}

export default ChartCurve;
