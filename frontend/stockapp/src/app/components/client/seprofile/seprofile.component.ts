import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-seprofile',
  templateUrl: './seprofile.component.html',
  styleUrls: ['./seprofile.component.css']
})
export class SeprofileComponent implements OnInit {

  id
  name
  brief
  contactAddress
  remarks
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name = params["name"];
      this.brief = params["brief"]
      this.contactAddress = params["contactAddress"]
      this.remarks = params["remarks"]
      
  });
   }

  ngOnInit(): void {
  }

  editDetails(){
    //http://localhost:8080/api/companies
    //this.http.post("http://localhost:8080/api/companies").subscribe(response => {this.response = response,this.display(this.response);});
  }

}
