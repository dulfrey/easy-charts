import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ChartComponent,
    HomeComponent,
    PagesComponent,
    
  ],
  
})
export class PagesModule {
}
