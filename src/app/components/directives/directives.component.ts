import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <button (click)="onClickMe()">Click me</button>
    {{clickMessage}}`,
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title: string = "ngContainer";
  testName: string ='Hung';
  inputName: string;
  clickMessage = '';
  oneClickMe(){
    this.clickMessage = 'Savior';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
