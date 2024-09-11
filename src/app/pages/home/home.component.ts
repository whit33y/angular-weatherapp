import { Component } from '@angular/core';
import { ForecastFormComponent } from '../../components/forecast-components/forecast-form/forecast-form.component';
import { ForecastComponent } from '../../components/forecast-components/forecast/forecast.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ForecastFormComponent, ForecastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
