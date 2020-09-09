import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { CompanyServiceService } from 'src/app/_services/company/company-service.service';


@Component({
  selector: 'app-company-comparison',
  templateUrl: './company-comparison.component.html',
  styleUrls: ['./company-comparison.component.css']
})
export class CompanyComparisonComponent implements OnInit {
  companies 
  selectedOption;
  selectedOption2;
  path:string;
  charts = [
    'pie',
    'line',
    'bar',
    'scatter'
  ]
  constructor(private router: Router,private tutorialService:CompanyServiceService) { }

  ngOnInit(): void {
    this.retrieveTutorials();

  }

  onSubmit(){
    this.router.navigate(["tcomp"]);
  }

  retrieveTutorials() {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.companies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  public onTap() {
    console.log(this.selectedOption)
    console.log(this.selectedOption2)

    console.log("hello");
    let navigationExtras: NavigationExtras = {
        queryParams:this.selectedOption
    };
    this.path = "/"+this.selectedOption2;

    this.router.navigate([this.path], navigationExtras);
}

}
