import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'C:/Users/Gautam98/Projects/stockapp/src/app/_services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  notLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.notLoggedIn = false;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      console.log("logged in");
    }else{
      this.notLoggedIn = true;
      this.showAdminBoard = false;
      this.showModeratorBoard = false;
      this.showUserBoard = false;
      console.log("logged out");
    }
    }

    
  }


