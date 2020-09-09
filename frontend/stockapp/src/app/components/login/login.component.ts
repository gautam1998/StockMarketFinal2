/*
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as moment from "moment";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }
  username: string;
  password: string;
  result
  path
  ngOnInit(): void {
  }
*/
  /*
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["clanding"]);
    }else {
      alert("Invalid credentials");
    }
  }
  */
 /*
login(): void{

    this.result = this.http.post<any>('http://localhost:8080/api/auth/signin', {username:this.username, password:this.password}).subscribe(response => {this.result = response,this.display(this.result);})
    
}

display(res):void{
  console.log(res)
  if(res.accessToken){
    //this.router.navigate(["clanding"])
    alert("User has signed in successfully :)")
    this.path = "/"+this.username
    this.router.navigate([this.path]);
    console.log(res.idToken);
    //this.setSession(res);
    this.setSession(res);
  }
  else{
    alert(res);
  }
}
private setSession(authResult) {
  //const expiresAt = moment().add(authResult.expiresIn,'second');

  localStorage.setItem('name', authResult.username);
  localStorage.setItem('email', authResult.email);
  localStorage.setItem('roles', authResult.roles);
  localStorage.setItem('accessToken', authResult.accessToken);
  localStorage.setItem('tokenType', authResult.tokenType);  
  //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  console.log("stored");
}          

logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}    
}
*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/auth.service';
import { TokenStorageService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  res
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.res = this.authService.login(this.form).subscribe(
      data => {
        if(data.accessToken){
          console.log("hello1");
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        }
        else{
          console.log("hello1");
          this.errorMessage = "Please get your account authorized";
          this.isLoginFailed = true;
        }
      },
      err => {
        console.log(err);
        if(err.text == "Please get your account authorized"){
          this.errorMessage = "Please get your account authorized";
          this.isLoginFailed = true;
        }
        else{
        //this.errorMessage = err.error.message;
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        }
      }
    );
    console.log(this.res)
  }

  reloadPage() {
    window.location.reload();
  }
}