import { Component } from '@angular/core';
import { ForecastService } from '../../../services/forecast/forecast.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  constructor(private ForecastService: ForecastService) {}
}
