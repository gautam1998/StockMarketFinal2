import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from 'src/app/_services/company/company-service.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;
  constructor(private tutorialService:CompanyServiceService) { }

  ngOnInit(): void {
  }

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
