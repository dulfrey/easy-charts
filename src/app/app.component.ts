import { Component, Input, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto'
import {  LineController, LineElement, PointElement, LinearScale, Title, ChartTypeRegistry } from 'chart.js'
import { faChartLine ,faChartBar, faProjectDiagram, faChartArea } from '@fortawesome/free-solid-svg-icons';


Chart.register(LineController, LineElement, PointElement, LinearScale, Title);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  constructor(){
    
  }
  ngOnInit(): void {
    
    
  }
 
}
