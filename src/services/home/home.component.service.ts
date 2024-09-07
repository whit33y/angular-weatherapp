import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
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
    let param = new HttpParams();
    param.append('key', this.apiKey);
    if (city) {
      param.append('q', city);
    }
    if (number_of_days) {
      param.append('days', number_of_days);
    }
    param.append('aqi', 'no');
    param.append('allerts', 'no');
    return this.http.get(this.apiUrl + `/forecast.json`, {
      observe: 'response',
      responseType: 'json',
      params: param,
    });
  }
}
