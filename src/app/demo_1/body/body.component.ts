import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  data: any = {
    name: "Pepita",
    lastname: "Pig"
  }

  constructor() { }

  ngOnInit() {
  }

  btnClick = function() {
    alert('Click!')
  }

}
