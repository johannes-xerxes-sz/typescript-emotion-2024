import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";

exporting(Highcharts);

function AnalyticsPieChart2() {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent", 
    },
    title: {
      text: "Lorem Ipsum",
      align: "left",
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "separator",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
          ],
        },
      },
    },
    xAxis: {
      categories: [
        "Sourced",
        "Initial Interview",
        "Validation Interview",
        "Client Interview",
        "Hired",
        "Active File",
        "Rejected",
      ],
      title: {
        text: null,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        innerSize: "40%",
        borderRadius: 8,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b><br>{point.percentage}%",
          distance: 20,
        },
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        animation: {
          duration: 2000,
        },
        colorByPoint: true,
        data: [
          {
            name: "Pie One",
            y: 21.3,
          },
          {
            name: "Pie Two",
            y: 18.7,
          },
          {
            name: "Pie Three",
            y: 20.2,
          },
          {
            name: "Pie Four",
            y: 14.2,
          },
          {
            name: "Pie Five",
            y: 25.6,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default AnalyticsPieChart2;
