import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";

exporting(Highcharts);

function AnalyticsSemiCircleDonut() {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent", // Set chart background color
    },
    title: {
      text: "All Active Status Workflow",
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
        dataLabels: {
          enabled: false,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -130,
        endAngle: 130,
        center: ["50%", "75%"],
        size: "110%",
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 20,
        showInLegend: true
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
        type: "pie",
        name: "Browser share",
        innerSize: "80%",
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

export default AnalyticsSemiCircleDonut;
