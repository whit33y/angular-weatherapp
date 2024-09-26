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
  ngOnInit(): void {}

  formattedDate: string | null = '';
  constructor(private datePipe: DatePipe) {
    const now = new Date();
    this.formattedDate = this.datePipe.transform(now, `yyyy-MM-dd HH:00`);
  }

  formatTime(dateTime: string): string | null {
    return this.datePipe.transform(dateTime, 'HH:mm');
  }
}
