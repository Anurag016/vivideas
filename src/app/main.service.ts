import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  register(regdata) {
    console.log("Ser", regdata);
    return this.http.post<any>('/register', { data: regdata })
      .pipe(map(data => {
        return data;
      }))
  }

  login(logindata) {
    return this.http.post<any>('/login', { data: logindata })
      .pipe(map(data => {
        return data;
      }))
  }

  product_save(data, file) {
    return this.http.post<any>('/saveproduct', { data: data, file: file })
      .pipe(map(data => {
        return data;
      }))
  }

  getProduts() {
    return this.http.get<any>('/getproduts')
      .pipe(map(data => {
        return data;
      }))
  }

  getbatchno(pid) {
    return this.http.post<any>('/getbatchno', { data: pid })
      .pipe(map(data => {
        return data;
      }))
  }

  generate_codes(info) {
    return this.http.post<any>('/generate_codes', info)
      .pipe(map(data => {
        return data;
      }))
  }
}
