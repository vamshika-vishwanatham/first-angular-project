import {Injectable} from '@angular/core';
import {CreateInfo, LoginInfo} from "./login/login-info";
import {Details} from "./usersInfo";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServiceService {
  userDetails: Array<CreateInfo> = Details;
  loginInfo: LoginInfo={email:'likithathodupunuri@gmail.com',password:'Liki@23'}as LoginInfo;

  constructor() {

  }

  createUser(userInfo: CreateInfo): string {
    this.userDetails.push(userInfo);
    return userInfo.firstName;
  }

  checkUser(userInfo: CreateInfo): boolean {
    let newUser = true;
    for (const user of this.userDetails) {
      if (user.email === userInfo.email) {
        newUser = false;
      }
    }
    return newUser;
  }

  getUserInfo(loginInfo: LoginInfo): string {
    let userName: string;
    console.log(loginInfo);
    for (const user of this.userDetails) {
      console.log(user)
      if (user.email === loginInfo.email && user.newPassword === loginInfo.password) {
        this.loginInfo = loginInfo;
        console.log(this.loginInfo);
        userName = user.firstName + user.surName;
        break;
      }
    }
    return userName;
  }

  getActiveUserInfo(): CreateInfo {
    console.log(this.loginInfo);
    if(this.loginInfo) {
      return this.userDetails.filter(user => user.email === this.loginInfo.email)[0];
    }else {
      return null;
    }

  }
}
