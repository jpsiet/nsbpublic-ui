import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from './angular-material/confirmation-dialog/confirmation-dialog.compoennt';
import { AlertDialogComponent } from './angular-material/alert-dialog/alert-dialog.component';


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

    //this.openDialog();

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
