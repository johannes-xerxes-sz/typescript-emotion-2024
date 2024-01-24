import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import funnel from "highcharts/modules/funnel";
import exporting from "highcharts/modules/exporting";

funnel(Highcharts);
exporting(Highcharts);
// TODO Add the stuffs on the HTML for exporting and funnel

const AnalyticsFunnel = () => {
  const options = {
    chart: {
      type: "funnel",
      backgroundColor: "transparent",
      spacingBottom: 30, 
    },
    title: {
      text: "Your Analytics",
      align: "left",
      style: {
        color: "#333", 
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
          enabled: false,
          format: "<b>{point.name}</b> ({point.y:f})",
          color: "black",
          softConnector: true,
        },
        neckWidth: "30%",
        neckHeight: "25%",
        width: "80%",
        height: "90%",
        colors: ["#8096EF", "#607CEB", "#4D63BC", "#394A8C"],
        showInLegend: true

      },
    },
    series: [
      {
        name: "Funnel",
        data: [
          ["Applied", 500],
          ["Other", 350],
          ["Job Offer", 200],
          ["Hired", 80],
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AnalyticsFunnel;
