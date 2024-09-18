import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentService } from '../../../../services/home/home.component.service';
import { ForecastService } from '../../../../services/forecast/forecast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forecast-form.component.html',
  styleUrl: './forecast-form.component.css',
})
export class ForecastFormComponent {
  formBuilder = inject(FormBuilder);
  errorMessage = '';
  constructor(
    private HomeComponentService: HomeComponentService,
    private ForecastService: ForecastService
  ) {}

  form = this.formBuilder.group({
    city: [''],
    number_of_days: [3],
  });

  processWeatherForecastData() {
    let { city, number_of_days } = this.form.value;
    this.ForecastService.updateLoading(true);
    if (number_of_days) {
      number_of_days = +number_of_days;
    }
    city = this.ForecastService.replacePolishChars(this.form.value.city!);
    this.HomeComponentService.getForecastByCity(
      city,
      number_of_days!
    ).subscribe({
      next: (response) => {
        this.ForecastService.updateForecast(response.body);
      },
      error: (err) => {
        this.ForecastService.updateLoading(false);
        if (err.error.error.code === 1006) {
          console.error(err);
          this.errorMessage = 'We cannot find city you was looking for!';
        } else {
          this.errorMessage = 'Error occurred, try again.';
        }
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      },
      complete: () => {
        this.ForecastService.updateLoading(false);
      },
    });
  }
}
