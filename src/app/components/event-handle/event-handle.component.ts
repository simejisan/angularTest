import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent implements OnInit {
  input1: string = 'input 1';
  input2: string = '';
  isCollapsed: boolean = false;
  clickMessage = '';

  constructor() {
  }

  toggleCollape() {
    this.isCollapsed = !this.isCollapsed;
  }

  /*  onKey(event: KeyboardEvent) {

      this.input2 += event.target;
    }*/

  onClickMe() {
    this.clickMessage = 'Savior';
  }

  /*  onTyping(name: string){
      this.name = name;
      console.log (name);
    }*/
  updateValue(event) {
    this.input2 = event.target.value;
  }

  ngOnInit(): void {
  }

}
