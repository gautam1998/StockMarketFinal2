import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://laptop-5uvd4pa0:8088/service-company2/api/company2/all");
  }

  get(name) {
    return this.http.get(`http://laptop-5uvd4pa0:8088/service-company2/api/company2/name/${name}`);
  }

  create(data) {
    return this.http.post("http://laptop-5uvd4pa0:8088/service-company2/api/company2/addCompany", data);
  }

  update(id, data) {
    return this.http.post(`http://laptop-5uvd4pa0:8088/service-company2/api/company2/updateInfo/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`http://laptop-5uvd4pa0:8088/service-company2/api/company2/tutorials/${id}`);
  }

  deleteAll() {
    return this.http.delete(`http://laptop-5uvd4pa0:8088/service-company2/api/company2/tutorials`);
  }

  findByTitle(title) {
    return this.http.get(`http://laptop-5uvd4pa0:8088/service-company2/api/company2/name/${title}`);
  }
}
