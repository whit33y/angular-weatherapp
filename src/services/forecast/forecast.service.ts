import { Injectable, signal } from '@angular/core';
import { Forecast } from './forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastData = signal<Forecast[]>([]);

  updateForecast(data: Forecast[]) {
    this.forecastData.set(data);
  }
}
