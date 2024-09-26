import { Component, Input } from '@angular/core';
import { ForecastDay } from '../../../../services/forecast/forecast.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast-by-hour',
  standalone: true,
  imports: [],
  templateUrl: './forecast-by-hour.component.html',
  styleUrl: './forecast-by-hour.component.css',
})
export class ForecastByHourComponent {
  @Input() forecast!: ForecastDay;
  ngOnInit(): void {
    console.log(this.forecast);
  }

  constructor(private datePipe: DatePipe) {}

  formatTime(dateTime: string): string | null {
    return this.datePipe.transform(dateTime, 'HH:mm');
  }
}
