import { Component, OnInit } from '@angular/core';
import {CreateInfo} from "../login/login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";
import {Details} from "../usersInfo";

@Component({
  selector: 'app-left-index',
  templateUrl: './left-index.component.html',
  styleUrls: ['./left-index.component.css']
})
export class LeftIndexComponent implements OnInit {
  userInfo: CreateInfo;
  constructor(private userDetailsService: UserDetailsServiceService,private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.userInfo);
    this.activeUser();
  }
  activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if(!this.userInfo){
      this.router.navigate(['/login-page']);
    }
  }

}
