import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastData = signal<[] | null>(null);

  updateForecast(data: any) {
    this.forecastData.set(data);
  }
}
