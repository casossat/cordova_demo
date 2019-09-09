import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.sass']
})
export class SonComponent implements OnInit {
  // Desde un componente padre se envia con la propiedad [dataSon] un objeto que se incluirá en al variable dataObj
  @Input("dataSon") dataObj: any;

  constructor() { }

  ngOnInit() {
  }

}
