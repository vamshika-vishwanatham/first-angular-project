import {FormBuilder, Validators} from "@angular/forms";
import {CreateInfo, LoginInfo} from "./login/login-info";
import {PostInfo} from "./create-post/post-info";

export class Forms {


  static loginForm(loginInfo: LoginInfo = {} as LoginInfo, formBuilder: FormBuilder = new FormBuilder()) {

    return formBuilder.group({
      // email : [loginInfo.email, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      email: [loginInfo.email, [Validators.required, Validators.email]],
      password: [loginInfo.password, Validators.required]
    });
  }

  static createForm(createInfo: CreateInfo = {} as CreateInfo, formBuilders: FormBuilder = new FormBuilder()) {

    return formBuilders.group({
      firstName: [createInfo.firstName, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      surName: [createInfo.surName, [Validators.required, Validators.maxLength(25), Validators.minLength(3)]],
      email: [createInfo.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      Phone: [createInfo.Phone, [Validators.required, Validators.pattern("^[7-9][0-9]{9}$")]],
      newPassword: [createInfo.newPassword, [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      date: [createInfo.date, Validators.required],
      month: [createInfo.month, Validators.required],
      year: [createInfo.year, Validators.required],
      selectGender: [createInfo.selectedGender, Validators.required]
    })
  }

  static postForm(postInfo: PostInfo={postText:'vamshika'} as PostInfo, formBuilders: FormBuilder = new FormBuilder()){
    return formBuilders.group({
      postText:[postInfo.postText, Validators.required]
    })
  }

}
