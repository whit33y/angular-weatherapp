import { Component, Input } from '@angular/core';
import { ForecastDay } from '../../../../services/forecast/forecast.interface';

@Component({
  selector: 'app-forecast-by-hour',
  standalone: true,
  imports: [],
  templateUrl: './forecast-by-hour.component.html',
  styleUrl: './forecast-by-hour.component.css',
})
export class ForecastByHourComponent {
  @Input() forecast!: ForecastDay;
}
