import { Component, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ForecastDay } from '../../../../services/forecast/forecast.interface';
import { ForecastByHourComponent } from '../forecast-by-hour/forecast-by-hour.component';

@Component({
  selector: 'app-forecast-more',
  standalone: true,
  imports: [ForecastByHourComponent],
  templateUrl: './forecast-more.component.html',
  styleUrl: './forecast-more.component.css',
})
export class ForecastMoreComponent {
  @Input() forecast!: ForecastDay;
}
