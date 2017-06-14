import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CustomValidators } from "app/custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectName: 'Test';


  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(
        null, [Validators.required, 
        CustomValidators.invalidProjectName], 
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }


  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === 'Test'){
  //     return{'nameIsForbidden': true};
  //   }
  //   return null; 
  // }

  onSubmit(){
    console.log(this.projectForm.value);
  }
}
