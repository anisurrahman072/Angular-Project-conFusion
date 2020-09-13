import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '', // empty string
    password: '', // empty string
    remember: false
  };

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { } // MatDialogRef <dialog>

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.dialogRef.close();
  }

}
