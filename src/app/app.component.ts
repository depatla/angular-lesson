import { Component } from '@angular/core';
import { MyListService } from './my-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lesson';
  totalList;
  constructor(private myservice: MyListService){
  	console.log(this.myservice);
  	this.totalList = this.myservice.getListData();
  }

  IncrementData(){
  	this.myservice.addItemToListData();
  }
}
