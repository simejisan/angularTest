import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  inputValueText: string = 'One way Binding data';
  inputNgModelText: string = 'Two way Binding data';

  constructor() {
  }


  ngOnInit(): void {
  }

}
