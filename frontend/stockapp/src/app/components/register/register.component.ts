/*
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }
  name: string;
  tel: string;
  password: string;
  password2: string;
  email: string;
  result;
  role = ["mod","user"]
  confirmed = false;

  ngOnInit(): void {
  }
  register(): void{
    if(this.password != this.password2){
      console.log("reached here 1");
      alert(this.password);
      alert(this.password2);
      alert("Passwords not mathcing")
    }
    else{
    this.result = this.http.post<any>('http://localhost:8080/api/auth/signup', {username:this.name,email:this.email,password:this.password,role:this.role}).subscribe(response => {this.result = response,this.display(this.result);})
    }
}

display(res):void{
  //console.log("helo1")

  //console.log(res)

  //console.log("helo2")
  

  if(res.message == "User registered successfully!"){
    console.log("reached here 2");
    alert(res.message);
    this.router.navigate(["login"]);
  }
  else{
    console.log("reached here 3");
    alert(res+" Try again !!");
  }

}
}
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["login"]);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}