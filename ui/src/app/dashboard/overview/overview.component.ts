import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ]
    },
    tooltips: {
      custom: tooltipModel => {
        tooltipModel.x = 0;
        tooltipModel.y = 0;
      }
    }
  };
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "line";
  public barChartLegend = false;
  public barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: "Series A",
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      pointBorderColor: "rgb(75, 192, 192)",
      pointBackgroundColor: "rgb(75, 192, 192)",
      pointRadius: 1.5,
      lineTension: 0.1
    }
  ];

  constructor() {}

  ngOnInit() {}
}
