import { Component, Input } from '@angular/core';
import { ForecastDay } from '../../../../../services/forecast/forecast.interface';

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
}
