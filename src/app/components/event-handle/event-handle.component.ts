import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent implements OnInit {
input1: string = "input 1";
input2: string = "input 2";
isCollapsed: boolean = false;
  constructor() { }
toggleCollape(){
    this.isCollapsed = !this.isCollapsed;
}
  ngOnInit(): void {
  }

}
