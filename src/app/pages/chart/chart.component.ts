
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartTypeRegistry } from 'chart.js';
import  Chart  from 'chart.js/auto'

@Component({
  selector: 'ngx-chart',
  styleUrls: ['./chart.component.scss'],
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  
  
  @Input() graphicTitle = ""
  graphicDescription = ""
  hasLogo = false;
  title = 'Easy Charts';
  tmp= 'icon'
  icons =[
    "https://risk.azurewebsites.net/assets/img/logos/logo_full_riesgos360.svg",
    "https://toscana.edu.co/wp-content/uploads/2020/03/logomen.png"
  ]
  //  labels = [
  //   'Feliz',
  //   'Aburrido',
  //   'Triste',
  //   'Enojado',
  //   'Frustrado',
  //   'Confundido',
  // ];
  labels = [
    'MOE',
    'Org 1',
    'Mento',
    'Admin os',
    'UNAL',
    'IT 270',
    'CCIT',
    'ONHido'
  ];
  tmpLabels =[]
  tmpDataSets = []
  tmpLabelx = ""
   data = { 
    labels: this.labels,
    datasets: [{
      label: 'Total', 
      backgroundColor: 'rgb(243, 83, 83)',
      borderColor: 'rgb(243, 83, 83)',
      data: [13, 5, 17, 13, 13, 15, 12,15],
    },
    {
      label: 'Aprobados',
      backgroundColor: 'rgb(170, 90, 206)',
      borderColor: 'rgb(170, 90, 206)',
      data: [3, 9, 8, 4, 8, 3, 3,6],
    },
    {
      label: 'No aprovados',
      backgroundColor: 'rgb(129, 197, 130)',
      borderColor: 'rgb(129, 197, 130)',
      data: [9, 6, 5, 5, 5, 6, 9,4],
    }

  ]
  };
  type: keyof ChartTypeRegistry = "radar"
  myChart: any;
  orderby: string;

  constructor(private route: ActivatedRoute, private http :HttpClient){
    
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.orderby = params.orderby;
        console.log(this.orderby); // price
        if (params[''] == 'url'){
          console.log(params['type'])
          
        }
        console.log(params['url'])
        switch (params['inputdatatype']) {
          case 'url':
          //   this.http.get<any>(params['inputdatatype']).subscribe(data => {
          //     console.log(data)
          // })
          this.http.get<any>('https://app.cne.gov.co/obsapi/chartData').subscribe(data => {
            console.log(data)
        })
          
      
            break;
          
          case 'params':
            
            break;
          default:
            this.changeChart('radar')
            break;
        }
        switch (params['type']) {
          case 'radar':
            this.changeChart(params['type'])
            break;
          case 'line':
            this.changeChart(params['type'])
            break;
          case 'bar':
            this.changeChart(params['type'])
            break;
          default:
            this.changeChart('radar')
            break;
        }
        if(params['showLogo'] == '1'){
          this.hasLogo = true;
        }else{
          this.hasLogo = false;
        }
      }
    );
    this.drawChart();
  }
  changeChart(type){
    const tmpType :keyof ChartTypeRegistry = type
    this.type= tmpType
    this.myChart.destroy();
    this.drawChart()
  }
  drawChart(){
    const config = {
      type: this.type ,
      data:this.data,
      options: {}
    };
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(
      ctx.getContext("2d"),
      config
    );
  }
  goToHome() {
    console.log('go home')
  }
}
