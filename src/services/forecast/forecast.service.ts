import { Injectable, signal } from '@angular/core';
import { Forecast } from './forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastData = signal<Forecast | null>(null);

  updateForecast(data: Forecast) {
    this.forecastData.set(data);
  }

  loading = signal<boolean>(false);

  updateLoading(data: boolean) {
    this.loading.set(data);
  }

  replacePolishChars(value: string): string {
    const polishChars = 'ąćęłńóśźżĄĆĘŁŃÓŚŹŻ';
    const nonPolishChars = 'acelnoszzACELNOSZZ';

    return value
      .split('')
      .map((char) => {
        const index = polishChars.indexOf(char);
        return index !== -1 ? nonPolishChars[index] : char;
      })
      .join('');
  }
}
