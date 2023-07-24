import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bien } from '../models/bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private apiUrl = 'http://localhost:8080/biens/biens';

  constructor(private http: HttpClient) { }

  getBiens(): Observable<Bien[]> {
    return this.http.get<Bien[]>(this.apiUrl);
  }
}
