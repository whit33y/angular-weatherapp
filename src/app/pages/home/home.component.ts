import { Component, effect } from '@angular/core';
import { ForecastFormComponent } from '../../components/forecast-components/forecast-form/forecast-form.component';
import { ForecastComponent } from '../../components/forecast-components/forecast/forecast.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ForecastService } from '../../../services/forecast/forecast.service';
import { Forecast } from '../../../services/forecast/forecast.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ForecastFormComponent, ForecastComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private ForecastService: ForecastService) {
    effect(() => {
      this.forecast = this.ForecastService.forecastData();
    });
  }
  forecast: Forecast | null = null;
}
