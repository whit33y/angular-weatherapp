import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentService } from '../../../services/home/home.component.service';
import { ForecastService } from '../../../services/forecast/forecast.service';

@Component({
  selector: 'app-forecast-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  replacePolishChars(value: string): string {
    const polishChars = 'ąćęłńóśźżĄĆĘŁŃÓŚŹŻ';
    const nonPolishChars = 'acelnoszzACELNOSZZ';

    return value
      .split('')
      .map((char) => {
        const index = polishChars.indexOf(char);
        return index !== -1 ? nonPolishChars[index] : char;
      })
      .join('');
  }

  processWeatherForecastData() {
    let { city, number_of_days } = this.form.value;

    if (number_of_days) {
      number_of_days = +number_of_days;
    }
    if (city && number_of_days) {
      city = this.replacePolishChars(this.form.value.city!);
      this.HomeComponentService.getForecastByCity(city, 1).subscribe({
        next: (response) => {
          this.ForecastService.updateForecast(response.body);
        },
        error: (err) => {
          if (err.error.error.code === 1006) {
            console.error(err);
            this.errorMessage = 'Nie znaleziono Twojego miasta!';
          } else {
            this.errorMessage = 'Wystąpił błąd, spróbuj ponownie.';
          }
        },
        complete: () => {},
      });
    }
  }
}
