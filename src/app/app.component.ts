import { Component, OnInit } from '@angular/core';

import { ConfirmationDialog } from './confirmation-dialog/confirmation-dialog.compoennt';
import { MatDialog } from '@angular/material/dialog';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog
    ) {
  }
  ngOnInit(): void {

    this.openDialog();

  }
  title = 'nsb-school-ui';
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.error("ConfirmationDialog closed");

      }
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.error("AlertDialog closed");

      }
    });
  }


}
