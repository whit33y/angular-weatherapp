import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeComponentService {
  private apiUrl = 'http://api.weatherapi.com/v1';
  private apiKey = enviroment.apiKey;

  constructor(private http: HttpClient) {}

  getForecastByCity(
    city: string,
    number_of_days: number
  ): Observable<HttpResponse<any>> {
    return this.http.get(
      this.apiUrl +
        `/forecast.json?key=` +
        this.apiKey +
        `&q= ` +
        city +
        `&days=` +
        number_of_days +
        `&aqi=no&alerts=no`,
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
