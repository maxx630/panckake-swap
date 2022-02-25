import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../models/data';

const apiData = "https://gist.githubusercontent.com/ozanakman/a010bdfefa02a13ea02adf864b72d4aa/raw/807f33dbd6af5667d8af4a6048d96ff69cf4400a/languages.json";

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  data!: Data[];

  constructor(private http: HttpClient) { }

  // Lettura Dati;
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(apiData);
  }
}
