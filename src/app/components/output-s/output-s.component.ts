import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-output-s',
  templateUrl: './output-s.component.html',
  styleUrls: ['./output-s.component.css']
})
export class OutputSComponent implements OnInit {
  @Input() status: string
  @Output() hungry = new EventEmitter();
  @Output() bad = new EventEmitter();
  @Output() stupid = new EventEmitter();
  statusText;
  constructor() { }

  ngOnInit(): void {

  switch (this.status){
    case 'hungry':
      this.statusText = "Cho an";
      break;

}

}
callPapa(){
  console.log(this.status);
  switch (this.status) {
    case 'hungry':
      this.feelHungry();
      break;

  }
}
feelHungry(){
  this.hungry.emit(null);
}
}
