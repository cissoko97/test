import { Component, OnInit } from '@angular/core';
import { User } from './models'
import { from } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  constructor() {

  }

  ngOnInit() {
  }
}
