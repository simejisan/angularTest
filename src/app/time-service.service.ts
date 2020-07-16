import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor() { }
  public getDateTime(){
    return new Date();
  }
}
