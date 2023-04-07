import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  get f() { return this.login.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.login.valid) {
      let payload = {
        emailId: this.login.value.email,
        password: this.login.value.password,

      };
      this.user.login(payload).subscribe((response: any) => {
        // console.log(response);
        localStorage.setItem('token', response.data)
        this.router.navigate(['/dashboard/notes'])
        this._snackBar.open("you are logged in", "ok", {
          duration: 3000,

        });

      });
    }
    else{
      this._snackBar.open("Check email and password", "ok", {
        duration: 3000,
  
      });
  
    }

    



  }


}
