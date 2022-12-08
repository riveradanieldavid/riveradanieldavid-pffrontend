// SERVICE: DATA PROVIDER

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../_models/experience.model';

// THIS API CAN CONNECT TO LOCAL SERVER OR HEROKU SERVER:
//  HERE YOU CHOICE CONNECT THE FRONTEND TO A LOCAL BACKEND OR A REMOTE BACKEND:
// DON'T FORGET CONNECT TO INTERNET TO CONNECT IN REMOTE!
// IN THIS APP THIS CONFIGURATION IS THE ONLY ONE THAT DUE DO
// THIS API TARGET REMOTE OR LOCAL
// REMOTE
const baseUrl = 'https://pfbackenddata-production.up.railway.app/api/experiences';
// EDIT THIS PORT SHOULD BE SAME THAT "application.properties" (TOMCAT emmbebed server)
// LOCAL
// const baseUrl = 'http://localhost:9093';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Experience[]> {
    const urlgetall = this.http.get<Experience[]>(`${baseUrl}/get/experiences`);
    console.log(urlgetall);
    return urlgetall
  }

  get(id: any): Observable<Experience> {
    const urlgetid = this.http.get<Experience>(`${baseUrl}/get/experience/${id}`);
    return urlgetid
    console.log(urlgetid);
    return urlgetid
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

  findByFile(file: any): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${baseUrl}?file=${file}`);
  }
}
