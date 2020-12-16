import {Component, OnInit} from '@angular/core';
import {CreateInfo} from "../login/login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";
import {Details} from "./newsFeedInterface";
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  userInfo: CreateInfo;
  newsFeedInfo= Details;

  constructor(private userDetailsService: UserDetailsServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.activeUser();
  }

  activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if (!this.userInfo) {
      this.router.navigate(['/login-page']);
    }
  }
}
