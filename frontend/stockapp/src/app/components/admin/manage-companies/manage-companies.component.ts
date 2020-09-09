import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {

  filterResultDataSet = []
  message = 'Manage your companies'
  response
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://laptop-5uvd4pa0:8088/service-company2/api/company2/all").subscribe(response => {this.response = response,this.display(this.response);})
  }
  display(res){
    console.log(res);
    this.filterResultDataSet = res;
  }

  public onTap(res) {
    console.log("hello");
    let navigationExtras: NavigationExtras = {
        queryParams: res
    };
    this.router.navigate(["/seprofile"], navigationExtras);
}

}
