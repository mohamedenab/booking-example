import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  data: Object;
  valied =false
  setData(data) {
    this.data = data;
  }
  valid(){
    return this.valied = true
  }
}
