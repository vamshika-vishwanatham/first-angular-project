import {Component, Inject, OnInit} from '@angular/core';
import {CreateInfo} from "../login/login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {Forms} from "../forms";
import {PostInfo} from "./post-info";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  userInfo: CreateInfo;
  postForm: FormGroup;
  postInfo: PostInfo;

  constructor(private userDetailsService: UserDetailsServiceService, private router: Router,
    @Inject(MAT_DIALOG_DATA)data) {
  }

  ngOnInit(): void {
    this.activeUser();
    this.postInfo={
      postText:'hnbvgh'
    }

    this.postForm = Forms.postForm(this.postInfo);
    console.log(this.postForm.get('postText').value);
  }

  private activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if (!this.userInfo) {
      this.router.navigate(['/login-page']);
    }
  }

  submitPost() {
    console.log(this.postForm.get('postText').value);
  }
}
