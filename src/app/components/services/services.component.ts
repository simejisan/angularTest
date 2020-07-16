import {Component, OnInit} from '@angular/core';
import {setInterval} from 'timers';
import {TimeServiceService} from '../../time-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(
    private timeService: TimeServiceService
  ) {
  }

  time = new Date();
  interval;

  ngOnInit(): void {
    this.interval = setInterval(() => (
      this.time = this.timeService.getDateTime()
    ), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
