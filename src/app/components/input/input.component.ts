import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  names = ['Hung', 'Hai', 'Nam', 'Tam'];

  ngOnInit(): void {
  }

}
