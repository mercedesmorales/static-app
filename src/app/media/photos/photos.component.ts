import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
	
	public httpdata: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
	  
      this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((data) => {
		  console.log(data);
		  this.httpdata = data;
	  });
	  
  }

}

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/