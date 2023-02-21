import "./index.html";

// This works fine in webpack development mode:
import { ArcElement, Chart, Legend, PieController, Title } from "chart.js"
Chart.register(PieController, ArcElement);

// This is needed for webpack production mode, otherwise "Uncaught ReferenceError: LinearScaleBase is not defined":
// import { ArcElement, Chart, Legend, PieController, Title, LinearScale } from "chart.js"
// Chart.register(PieController, ArcElement, LinearScale);

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  plugins: [Legend, Title], // including Tooltip here is not enough
  type: 'pie',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          fontSize: 14,
          color: "rgb(0,0,0)",
          boxWidth: 14,
        },
        onClick: null,
      },
      title: {
        display: true,
        text: "My awesome chart",
        font: {
          size: 16,
          weight: "bold",
          color: "rgb(0,0,0)",
        },
      },
    },
  },
});

console.log("Hello World!");
