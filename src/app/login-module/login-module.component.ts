import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
	username:string;
	password:string;
  constructor() { }

  ngOnInit() {
  	//alert("init called");
  }

  myClickFunction(){
  	console.log(this.username, "-----", this.password);
  }

}
