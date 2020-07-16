import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent implements OnInit {
  input1: string = 'input 1';
  input2: string = '';
  clickMessage = '';
  isCollapsed: boolean = false;

  constructor() {
  }

  toggleCollape() {
    this.isCollapsed = !this.isCollapsed;
  }

  onKey(event: KeyboardEvent) {

    this.input2 += event.target;
  }

  onClickMe() {
    this.clickMessage = 'Savior';
  }
 /* updateValue(event: Event){
    this.label = event.target.value;
  }
  updateValue1(value: any){
    this.label = value;
  }*/
  ngOnInit(): void {
  }

}
