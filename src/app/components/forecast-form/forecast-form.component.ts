import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentService } from '../../../services/home/home.component.service';

@Component({
  selector: 'app-forecast-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forecast-form.component.html',
  styleUrl: './forecast-form.component.css',
})
export class ForecastFormComponent {
  formBuilder = inject(FormBuilder);

  constructor(private HomeComponentService: HomeComponentService) {}

  form = this.formBuilder.group({
    city: [''],
    number_of_days: [3],
  });

  submit() {
    let { city, number_of_days } = this.form.value;
    if (number_of_days) {
      number_of_days = +number_of_days;
    }
    console.log(city, number_of_days);
  }

  processWeatherForecastData() {
    let { city, number_of_days } = this.form.value;
    if (number_of_days) {
      number_of_days = +number_of_days;
    }
    if (city && number_of_days) {
      this.HomeComponentService.getForecastByCity(
        city,
        number_of_days
      ).subscribe({
        next: (response) => {},
        error: (err) => {},
        complete: () => {},
      });
    }
  }
}
