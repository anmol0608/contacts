import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    )
  });
  constructor() {
    // this.contactForm = new FormGroup({
    //   name: new FormControl(
    //     '',
    //     Validators.compose([Validators.required])
    //   ),
    //   email: new FormControl(
    //     '',
    //     Validators.compose([Validators.required, Validators.email])
    //   )
    // });
    this.contactForm.get('name').valueChanges.subscribe(val => console.log(val));
  }

  ngOnInit() {
    console.log(this.contactForm);
  }

  submit(){
    console.log(this.contactForm.value);
  }
}
