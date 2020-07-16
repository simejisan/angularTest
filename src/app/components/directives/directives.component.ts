import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title: string = "ngContainer";
  testName: string ='Hung';
  inputName: string;


  constructor() { }

  ngOnInit(): void {
  }

}
