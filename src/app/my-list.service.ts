import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyListService {
	listdata;
  constructor() { }
  getTodayDate(){
  	let date = new Date();
  	return date;
  }

  getListData(){
  	this.listdata = [
			{
				color: "red",
				value: "#f00"
			},
			{
				color: "green",
				value: "#0f0"
			},
			{
				color: "blue",
				value: "#00f"
			},
			{
				color: "cyan",
				value: "#0ff"
			},
			{
				color: "magenta",
				value: "#f0f"
			},
			{
				color: "yellow",
				value: "#ff0"
			},
			{
				color: "black",
				value: "#000"
			}
		];

	return this.listdata;
  }

  addItemToListData(){
  	this.listdata.push({
				color: "black",
				value: "#000"
			});
  }
}
