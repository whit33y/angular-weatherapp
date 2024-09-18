import { Component, effect } from '@angular/core';
import { ForecastService } from '../../../../services/forecast/forecast.service';
import { Forecast } from '../../../../services/forecast/forecast.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ForecastMoreComponent } from '../forecast-more/forecast-more.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [ProgressSpinnerModule, CommonModule, ForecastMoreComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
  providers: [DatePipe],
})
export class ForecastComponent {
  constructor(
    private ForecastService: ForecastService,
    private DatePipe: DatePipe
  ) {
    effect(() => {
      this.forecast = this.ForecastService.forecastData();
      this.loading = this.ForecastService.loading();
      this.forecastEdit = [];
      if (this.forecast?.forecast) {
        for (let i = 0; i < this.forecast.forecast.forecastday.length; i++) {
          const forecastDay = this.forecast.forecast.forecastday[i];
          const dateObj = new Date(forecastDay.date);
          const dayOfWeek = this.DatePipe.transform(dateObj, 'EEEE');
          if (dayOfWeek) {
            this.forecast.forecast.forecastday[i].date = dayOfWeek;
          }
          if (this.forecast.forecast.forecastday[i]) {
            this.forecastEdit?.push(false);
          }
        }
      }
    });
  }

  changeEditStatus(index: number) {
    for (let i = 0; i < this.forecastEdit.length; i++) {
      if (i !== index) {
        this.forecastEdit[i] = false;
      }
    }
    this.forecastEdit[index] = !this.forecastEdit[index];
  }

  forecastEdit: boolean[] = [];
  forecast: Forecast | null = null;
  loading: boolean = false;
}
