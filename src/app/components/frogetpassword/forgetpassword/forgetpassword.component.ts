import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  forgetpasswordform!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.forgetpasswordform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
    });
  }
    
    
  get f() { return this.forgetpasswordform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetpasswordform.valid) {
      let payload={
      emailId: this.forgetpasswordform.value.email,
      

      };
      this.user.forgetpassword(payload,Token).subscribe((response:any)=>{
       
      });
      
      
    }
  }
}

