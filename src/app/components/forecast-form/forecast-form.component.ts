import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forecast-form.component.html',
  styleUrl: './forecast-form.component.css',
})
export class ForecastFormComponent {
  formBuilder = inject(FormBuilder);
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
}
