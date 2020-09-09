import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {

  name 
  ceo
  description
  board
  sector
  se
  turnover
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.ceo = params["ceo"];
      this.turnover = params["turnover"]
      this.board = params["board"]
      this.se = params["se"]
      this.description = params["description"]
      this.sector = params["sector"]
  });
   }

  ngOnInit(): void {
  }

  editDetails(){
    //http://localhost:8080/api/companies
    //this.http.post("http://localhost:8080/api/companies").subscribe(response => {this.response = response,this.display(this.response);});
  }

}
