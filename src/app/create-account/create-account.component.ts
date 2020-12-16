import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
// import {LoginInfo} from "../login/login-info";
import {Forms} from "../forms";
import {CreateInfo} from "../login/login-info";
import {DateList, MonthList, YearList} from "./DOBData";
import {RegistrationService} from '../registration.service';
import {UserDetailsServiceService} from "../user-details-service.service";
import {Details} from "../usersInfo";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createForm: FormGroup;
  isSubmitted = false;
  createInfo: CreateInfo;
  dateList = DateList;
  monthList = MonthList;
  yearList = YearList;
  name: string;
  isExisting = false;

  constructor(private formBuilder: FormBuilder, private _registrationService: RegistrationService, private userDetailsService: UserDetailsServiceService) {
  }

  ngOnInit(): void {
    this.createInfo = {
      firstName: "vam",
      surName: "vghjvh",
      email: "vambkj@gmail.com",
      Phone: 9160253004,
      newPassword: "Vamshi@766"
    } as CreateInfo;

    this.createForm = Forms.createForm();


  }

  submit() {
    console.log(this.createForm.value);
    if (this.userDetailsService.checkUser(this.createForm.value)) {
      this.name = this.userDetailsService.createUser(this.createForm.value);
      this.isExisting = false;
    } else{
      this.isExisting = true;
    }
      }
}
