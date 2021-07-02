import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  topHeadingApiURL = 'https://api.npoint.io/49eaeebb2fbdc5f7c55a';
  covidApiURL      = 'https://api.npoint.io/4ee1fce74534461943fa';
  politicalApiURL  = 'https://api.npoint.io/74cb07149142a16a2abd';

  topHeading(): Observable<any> {
    return this.http.get(this.topHeadingApiURL);
  }

  covidNews(): Observable<any>
  {
    return this.http.get(this.covidApiURL);

  }
  politicalNews(): Observable<any>
  {
    return this.http.get(this.politicalApiURL);

  }
}
