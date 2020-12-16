import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Forms} from "../forms";
import {LoginInfo} from "./login-info";
import {UserDetailsServiceService} from "../user-details-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  loginInfo: LoginInfo;
  name: string ;
  isValid = true;

  constructor(private userDetailsService: UserDetailsServiceService, private router: Router) {

  }

  ngOnInit(): void {

    this.loginInfo = {email: 'likithathodupunuri@gmail.com', password: 'Liki@23'} as LoginInfo;
    this.loginForm = Forms.loginForm(this.loginInfo);

  }

  login() {
    console.log(this.loginForm.value);
    this.name = this.userDetailsService.getUserInfo(this.loginForm.value);
    if (this.name) {
      this.isValid = true;
      this.router.navigate(['']);
    } else {
      this.isValid = false;
    }
  }
}
