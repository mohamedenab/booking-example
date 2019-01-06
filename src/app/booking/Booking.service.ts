import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  data: Object;
  setData(data) {
    this.data = data;
  }
}
