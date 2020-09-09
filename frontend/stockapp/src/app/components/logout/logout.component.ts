import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TokenStorageService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/token-storage.service';
import { NavComponent } from 'C:/Users/Gautam98/Projects/stockapp/src/app/components/nav/nav.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private tokenStorageService: TokenStorageService,private nav: NavComponent) { 
  }

  ngOnInit(): void {
    /*
    console.log("hello1")
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(["login"]);
    alert(localStorage.getItem('name'));
    this.nav.notLoggedIn = false;
    this.nav.showAdminBoard = true;
    this.nav.showModeratorBoard = true;
    this.nav.showUserBoard = true;
    console.log("logged out");
    */
  }

}
