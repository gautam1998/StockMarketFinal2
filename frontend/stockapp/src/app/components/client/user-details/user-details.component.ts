import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  AUTH_API = 'http://localhost:8082/api/auth/';
  username 
  email 
  roles 
  password
  data
  constructor(private route: ActivatedRoute,private tokenStorage: TokenStorageService,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      //this.username = localStorage.getItem("name");
      //this.email = localStorage.getItem("email");
      //this.roles = localStorage.getItem("roles");
      //this.username = params['username'];
      console.log(this.tokenStorage.getUser());
      this.data = this.tokenStorage.getUser();
      this.username = this.data.username
      this.email = this.data.email
      this.roles = this.data.roles
      
    })
  }
  public onTap(){
    console.log("hello")
    console.log(this.username)
   // this.AUTH_API + 'userUpdate2/'+this.username+'/'
    console.log(this.http.put('http://localhost:8082/api/auth/userUpdate2/Gautam ', {
      username: this.username,
      email: this.email,
      password: this.password
    }, httpOptions));
  }

}
