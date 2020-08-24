import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgSrc = 'assets/images/github.png';
  constructor() { }

  ngOnInit(): void {
  }

}
