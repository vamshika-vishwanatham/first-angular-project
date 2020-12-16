import { Component, OnInit } from '@angular/core';
import {CreateInfo} from "../login/login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.component.html',
  styleUrls: ['./profile-id.component.css']
})
export class ProfileIdComponent implements OnInit {
  userInfo: CreateInfo;

  constructor( private userDetailsService: UserDetailsServiceService,private router: Router) { }

  ngOnInit(): void {
    this.activeUser();
  }
  activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if(!this.userInfo){
      this.router.navigate(['/login-page']);
    }
  }
}
