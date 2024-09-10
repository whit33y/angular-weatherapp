import { Component, effect } from '@angular/core';
import { ForecastService } from '../../../services/forecast/forecast.service';
import { Forecast } from '../../../services/forecast/forecast.interface';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  constructor(private ForecastService: ForecastService) {
    effect(() => {
      this.forecast = this.ForecastService.forecastData();
      console.log(this.forecast);
    });
  }
  forecast: Forecast[] = [];
}
