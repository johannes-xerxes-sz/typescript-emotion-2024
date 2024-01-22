import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import funnel from "highcharts/modules/funnel";
import exporting from "highcharts/modules/exporting";

funnel(Highcharts);
exporting(Highcharts);

const AnalyticsFunnel = () => {
  const options = {
    chart: {
      type: "funnel",
      backgroundColor: "transparent", // Set chart background color
      spacingBottom: 30, // Add bottom spacing
    },
    title: {
      text: "Funnel Chart Example",
      style: {
        color: "#333", // Set title text color
      },
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
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b> ({point.y:.1f}%)",
          color: "black",
          softConnector: true,
        },
        neckWidth: "30%",
        neckHeight: "25%",
        width: "80%",
        height: "90%",
      },
    },
    series: [
      {
        name: "Funnel",
        data: [
          ["Step 1", 100],
          ["Step 2", 80],
          ["Step 3", 60],
          ["Step 4", 40],
          ["Step 5", 20],
        ],
      },
    ],
    credits: {
        enabled: false
      },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AnalyticsFunnel;
