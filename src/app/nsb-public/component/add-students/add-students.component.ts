import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html'
})
export class AddStudentsComponent implements OnInit {
  @Output() done: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<AddStudentsComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    grade: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    age: new UntypedFormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    const name =
      this.profileForm.value.firstName + '-' + this.profileForm.value.lastName;

    this.studentService.addStudent({ name }).subscribe((data) => {
      console.log(data);
      this.done.emit(true);
      this.dialogRef.close(true);
    });
  }

  ngOnInit(): void {
   this.prePopulateWithData();
  }

  prePopulateWithData(){
    if (this.data) {
      const name = this.data.name;
      const namesSplit = name.split('-');
      let firstName = '';
      let lastName = '';
      if (namesSplit.length > 1) {
        firstName = namesSplit[0];
        lastName = namesSplit[1];
      } else {
        firstName = name.slice(0, 4);
        lastName = name.slice(4, name.length);
      }
      this.profileForm.setValue({ firstName, lastName , grade: this.data.grade ?? '', email: this.data.email ?? '', age: this.data.age ?? ''} );
    }
  }

}
