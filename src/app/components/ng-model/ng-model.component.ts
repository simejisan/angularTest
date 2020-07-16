import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  var1: string ="This is var 1";
  var2: string = "This is var 2";
  var3: string ="This is var 3";
  var4: string = "This is var 4";


  constructor() { }

  ngOnInit(): void {
  }

}
