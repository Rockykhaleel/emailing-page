var xValues = ["View", "Not Viewed"];
var yValues = [65, 35];
var barColors = ["#008000 ", "#808080 "];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Jobs Posted",
      font: {
        size: 100,
        weight: "bold",
      },
    },
  },
});

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Jobs Posted",
      font: {
        size: 100,
        weight: "bold",
      },
    },
  },
});
