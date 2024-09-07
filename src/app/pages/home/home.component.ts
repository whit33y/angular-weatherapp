import { Component } from '@angular/core';
import { ForecastFormComponent } from '../../components/forecast-form/forecast-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ForecastFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
