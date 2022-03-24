
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chart',
  styleUrls: ['./chart.component.scss'],
  templateUrl: './chart.component.html',
})
export class ChartComponent {

  constructor() {
  }

  goToHome() {
    console.log('go home')
  }
}
