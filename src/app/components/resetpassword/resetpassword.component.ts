import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  resetpasswordform!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.resetpasswordform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      
    });
  }
    
    
  get f() { return this.resetpasswordform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetpasswordform.valid) {
      let payload={
      password: this.resetpasswordform.value.password,
      confirmpassword:this.resetpasswordform.value.confirmPassword
      

      };
      this.user.resetpassword(payload).subscribe((response:any)=>{
        console.log(response);
      });
      
      
    }
  }

}
