Chart.Legend.prototype.afterFit = function() {
  this.height = this.height + 15;
};

var xValues = ["Hoàn thành", "Thực hiện", "Từ chối"];
var yValues = [55, 49, 44];
var barColors = [
  "#23bd5a",
  "#f2be1d",
  "#ff0800"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      borderColor:"black"
    }]
  },
  options: {
    title: {
      display: false
    },
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      labels: [
        {
          render: 'percentage',
          fontColor: '#000',
          fontSize: '15'
          // arc: true,
        // position: 'border'
        }
      ]
    }
  }
});

// Bar chart

Chart.Legend.prototype.afterFit = function() {
  this.height = this.height + 20;
};

var xValues_Bar = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
var data1 = [700 , 800, 1200, 950, 1000];
var data2 = [15, 30, 27, 12, 20];


new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues_Bar,
    datasets: [ 
    {
      label: 'Hoàn thành',
      data: data1,
      // borderColor: Utils.CHART_COLORS.red,
      // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      backgroundColor:"#23bd5a",
      borderColor:"black",
      borderRadius: 10
    },
    {
      label: 'Chưa hoàn thành',
      data: data2,
      // borderColor: Utils.CHART_COLORS.blue,
      // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
      backgroundColor:"#FF0800",
      borderColor:"black",
      borderRadius:10
    }
  
  ]
  },
  options: {
    layout: {
      padding: 10
    },
    title: {
      display: false
    },
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      labels: [
        {
          render: 'value',
          fontColor: '#000',
          fontSize: '13'
          // arc: true,
        // position: 'border'
        }
      ]
    },
    scales: {
      xAxes: [{
              // display: true,
              // scaleLabel: {
              //     display: true,
              //     labelString: 'Tháng'
              // }
          }],

      // yAxes: [{
      //         display: true,
      //         ticks: {
      //             beginAtZero: true,
      //             // steps: 10,
      //             // stepValue: 5,
      //             max: 1400
      //         }
      //     }]
  },
  }
});