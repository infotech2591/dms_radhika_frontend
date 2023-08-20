
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any; 
  incorrectError: any = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
   if(this.loginForm.valid){
    if(this.loginForm.value.mobileNumber == '9827786062' && this.loginForm.value.password == '123456'){
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/dashboard'])
    } else {
      this.incorrectError = true;
    }
   }
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
