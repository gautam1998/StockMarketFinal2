import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from 'src/app/_services/stockexchange/stockexchange.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-manage-se',
  templateUrl: './manage-se.component.html',
  styleUrls: ['./manage-se.component.css']
})
export class ManageSEComponent implements OnInit {

  constructor(private StockexchangeService: StockexchangeService,private router: Router,private http: HttpClient) { }
  filterResultDataSet = []
  message = 'List of Stock Exchanges'
  response
  ngOnInit(): void {
    this.http.get("http://laptop-5uvd4pa0:8088/service-company2/api/stockExchange2/all").subscribe(response => {this.response = response,this.display(this.response);})
    
  }
  display(res){
    console.log(res);
    this.filterResultDataSet = res;
    //console.log(this.filterResultDataSet)

  }
  public onTap(res) {
    console.log("hello");
    let navigationExtras: NavigationExtras = {
        queryParams: res
    };
    this.router.navigate(["/seprofile"], navigationExtras);
}

}
