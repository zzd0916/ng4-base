import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //请求本地json
  constructor(private http:Http) {

  }
  fetchData(){
    return this.http.get("../assets/people.json")
    .pipe(map((res) => res.json()))
  }
}
