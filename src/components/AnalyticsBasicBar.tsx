import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";

exporting(Highcharts);

function AnalyticsBasicBar() {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
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
      bar: {
        borderRadius: "50%",
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
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
        name: "Total Applicants",
        data: [4520, 3500, 2500, 1800, 1200, 800, 500],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default AnalyticsBasicBar;
