import { Component, OnInit } from '@angular/core';
import {CreateInfo} from "../login/login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";
import {Names} from "./ContactNames";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  userInfo: CreateInfo;
  contactName= Names;
  constructor(private userDetailsService: UserDetailsServiceService,private router: Router) {

  }

  ngOnInit(): void {
    this.activeUser();
  }
  activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if(!this.userInfo) {
      this.router.navigate(['/login-page']);
    }
}
}
