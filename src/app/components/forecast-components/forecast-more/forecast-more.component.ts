import { Component, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ForecastDay } from '../../../../services/forecast/forecast.interface';

@Component({
  selector: 'app-forecast-more',
  standalone: true,
  imports: [],
  templateUrl: './forecast-more.component.html',
  styleUrl: './forecast-more.component.css',
})
export class ForecastMoreComponent {
  @Input() forecast!: ForecastDay;
  ngOnInit(): void {
    console.log(this.forecast);
  }

  constructor(private datePipe: DatePipe) {}

  formatTime(dateTime: string): string | null {
    return this.datePipe.transform(dateTime, 'HH:mm');
  }
}
