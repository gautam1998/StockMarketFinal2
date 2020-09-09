import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-company-details3',
  templateUrl: './company-details3.component.html',
  styleUrls: ['./company-details3.component.css']
})
export class CompanyDetails3Component implements OnInit {
  
  title = 'custom-search-filter-example';
  searchedKeyword: string;
  filterResultDataSet = []
  /*
  filterResultDataSet = [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Pourtgal',
      club:'Juventus'
    },
    {
      firstName: 'Leo',
      lastName: 'Messi',
      country: 'Argentina',
      club:'Barcelona'
    },
    {
      firstName: 'Neymar',
      lastName: 'Junior',
      country: 'BRAZIL',
      club:'PSG'
    },
    {
      firstName: 'Sergio',
      lastName: 'Ramos',
      country: 'SPAIN',
      club:'Real Madrid'
    },
    {
      firstName: 'Karim',
      lastName: 'Benzema',
      country: 'France',
      club:'Real Madrid'
    },
    {
      firstName: 'Sergio',
      lastName: 'Buiscut',
      country: 'SPAIN',
      club:'Barcelona'
    },
    {
      firstName: 'Gerard',
      lastName: 'Pique',
      country: 'SPAIN',
      club:'Barcelona'
    }
  ]
*/
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
    this.router.navigate(["/companyprofile"], navigationExtras);
}

  
}
