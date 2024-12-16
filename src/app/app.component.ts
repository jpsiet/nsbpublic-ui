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
  constructor() {
  }

  ngOnInit(): void {
   }
  title = 'nsb-school-ui';
 }
