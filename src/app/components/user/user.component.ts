import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = "John Doe";

  constructor() {
    this.name = "John Doe constructor";
   }

  ngOnInit() {
    this.name = "John Doe Init";
  }

}
