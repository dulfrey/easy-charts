import { Component, Input, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto'
import {  LineController, LineElement, PointElement, LinearScale, Title, ChartTypeRegistry } from 'chart.js'
import { faChartLine ,faChartBar, faProjectDiagram, faChartArea } from '@fortawesome/free-solid-svg-icons';


Chart.register(LineController, LineElement, PointElement, LinearScale, Title);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  faChartLine = faChartLine;
  faChartBar= faChartBar 
  faProjectDiagram = faProjectDiagram
  @Input() graphicTitle = ""
  graphicDescription = ""
  hasIcon = true;
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
    'Felicidad',
    'Tristeza',
    'Enojo',
    'Sorpersa',
    'Disgusto',
    'Calma',
    'Confución',
    'Miedo'
  ];
  tmpLabels =[]
  tmpDataSets = []
  tmpLabelx = ""
   data = { 
    labels: this.labels,
    datasets: [{
      label: 'Octavo', 
      //backgroundColor: 'rgb(243, 83, 83)',
      borderColor: 'rgb(243, 83, 83)',
      data: [13, 5, 10, 8, 13, 15, 12,6],
    },
    {
      label: 'Noveno',
      //backgroundColor: 'rgb(170, 90, 206)',
      borderColor: 'rgb(170, 90, 206)',
      data: [8, 9, 8, 15, 8, 15, 3,10],
    },
    {
      label: 'Decimo',
      //backgroundColor: 'rgb(129, 197, 130)',
      borderColor: 'rgb(129, 197, 130)',
      data: [9, 16, 20, 10, 5, 6, 5,5],
    }

  ]
  };
  type: keyof ChartTypeRegistry = "radar"
  myChart: any;
  constructor(){
    
  }
  ngOnInit(): void {
    
    this.drawChart();
  }
  generateChart(){
    const tmpType :keyof ChartTypeRegistry = 'bar'
    this.type= tmpType
    this.myChart.destroy();
    this.data.labels = this.tmpLabels
    this.data.datasets = this.tmpDataSets
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
  changeChart(type){
    const tmpType :keyof ChartTypeRegistry = type
    this.type= tmpType
    this.myChart.destroy();
    this.drawChart()
  }
  deleteIcon(i){
    this.icons.splice(i, 1);
  } 
  addIcon(url){
    this.icons.push(url)
  }
  addLabelX(tmpLabelX){
    this.tmpLabels.push(tmpLabelX)
  }
  addDataset(){
    var data = []
    var inputLabel = document.querySelector("#label_tmp") as HTMLInputElement;
    var color = document.querySelector("#html5colorpicker") as HTMLInputElement;
    console.log(color.value)
    for (let index = 0; index < this.tmpLabels.length; index++) {
      var containputiner = document.querySelector("#id_"+index) as HTMLInputElement;
      data.push(containputiner.valueAsNumber)
      if(containputiner.value == ""){
        console.log("erro")
        alert('Tienes campos vacios')
        return
      }
    }
    this.tmpDataSets.push(
      {
        label: inputLabel.value, 
        backgroundColor: color.value,
        borderColor: 'rgb(33, 33, 196)',
        data: data,
      }
    )
  }
  deleteDataSet(i){
    this.tmpDataSets.splice(i, 1);
  }
}
