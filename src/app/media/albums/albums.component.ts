import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

	public httpdata: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
	  
      this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe((data) => {
		  console.log(data);
		  this.httpdata = data;
	  });
	  
  }

}
