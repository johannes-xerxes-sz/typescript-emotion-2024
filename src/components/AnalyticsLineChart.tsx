import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";

exporting(Highcharts);

function AnalyticsLineChart() {
  const options = {
    chart: {
      type: "line",
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
    yAxis: {
        title: {
            text: null
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },

        },
    },
    legend: {
      align: "center",
      verticalAlign: "top",
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
        name: "Data 1",
        data: [
          {
            name: "Data One",
            y: 21.3,
          },
          {
            name: "Data Two",
            y: 18.7,
          },
          {
            name: "Data Three",
            y: 20.2,
          },
          {
            name: "Data Four",
            y: 14.2,
          },
          {
            name: "Data Five",
            y: 25.6,
          },
        ],
      },
      {
        animation: {
          duration: 2000,
        },
        name: "Data 2",
        data: [
          {
            name: "Data One",
            y: 15.7,
          },
          {
            name: "Data Two",
            y: 12.3,
          },
          {
            name: "Data Three",
            y: 14.8,
          },
          {
            name: "Data Four",
            y: 11.2,
          },
          {
            name: "Data Five",
            y: 18.6,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default AnalyticsLineChart;
