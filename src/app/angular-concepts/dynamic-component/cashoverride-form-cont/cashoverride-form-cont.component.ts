import { Component, OnDestroy, OnInit } from '@angular/core';
import {

  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CashoverrideService } from '../cashoverride.service';

@Component({
  selector: 'app-cashoverride-form-cont',
  templateUrl: './cashoverride-form-cont.component.html',
  styleUrls: ['./cashoverride-form-cont.component.scss'],
})
export class CashoverrideFormContComponent implements OnInit, OnDestroy {
  constructor(
    private fb: UntypedFormBuilder,

  ) {

  }

  form!: UntypedFormGroup;
  statesData: any;
  nameFormField: string = 'name';
  selectFormField: string = 'city';
  cashOverridesFormField: string = 'cashOverrides';
  stateSelectionMap = new Map<string, string>();
  subcriptions:Subscription[] = [];
  options = [
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'Mass',
      value: 'MA',
    },
    {
      label: 'Rohd island',
      value: 'RI',
    },
    {
      label: 'Los Angles',
      value: 'LA',
    },
  ];

   get skills(): UntypedFormArray {
    return this.form.get('skills') as UntypedFormArray;
  }

  newSkill(): UntypedFormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      // [this.nameFormField]: new FormControl('Test', Validators.required),
      // [this.selectFormField]: new FormControl('LA', Validators.required),
      // address: new FormControl(
      //   {
      //     addressLine1: '28 autmun ln',
      //     addressLine2: 'Test',
      //     zipCode: '01532',
      //     city: 'Northborough',
      //   },
      //   Validators.required
      // ),

      [this.cashOverridesFormField]: new UntypedFormControl([]),
      // skills: this.fb.array([]),
    });

    this.form.statusChanges.subscribe((val)=>{
      console.log("logging value form status changes subscription");
      console.log(JSON.stringify(val));
    })
  }

  handleForm() {
    console.log(this.form.value);
  }

  ngOnDestroy(): void {
      this.subcriptions.forEach( s => (s|| {unsubscribe (){}}).unsubscribe());
  }
}
