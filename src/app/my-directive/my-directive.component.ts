import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.css']
})
export class MyDirectiveComponent implements OnInit {
  isRegistered = false;
  constructor() { }

  ngOnInit() {
  }

  enableRegister(){
    this.isRegistered = true;
  }
}
