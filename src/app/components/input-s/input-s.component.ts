import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-s',
  templateUrl: './input-s.component.html',
  styleUrls: ['./input-s.component.css']
})
export class InputSComponent implements OnInit {

  constructor() { }
  @Input() name

  ngOnInit(): void {
  }

}
