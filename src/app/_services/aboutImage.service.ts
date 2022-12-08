// SERVICE: DATA PROVIDER

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../_models/about.model';

// THIS API CAN CONNECT TO LOCAL SERVER OR HEROKU SERVER:
//  HERE YOU CHOICE CONNECT THE FRONTEND TO A LOCAL BACKEND OR A REMOTE BACKEND:
// DON'T FORGET CONNECT TO INTERNET TO CONNECT IN REMOTE!
// IN THIS APP THIS CONFIGURATION IS THE ONLY ONE THAT DUE DO
// THIS API TARGET REMOTE OR LOCAL
// REMOTE
const baseUrl = 'https://pfbackenddata-production.up.railway.app/api/abouts';
// EDIT THIS PORT SHOULD BE SAME THAT "application.properties" (TOMCAT emmbebed server)
// LOCAL
// const baseUrl = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<About[]> {
    return this.http.get<About[]>(`${baseUrl}/get/abouts`);
  }

  get(id: any): Observable<About> {
    return this.http.get<About>(`${baseUrl}/get/about/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByFile(file: any): Observable<About[]> {
    return this.http.get<About[]>(`${baseUrl}?file=${file}`);
  }
}
