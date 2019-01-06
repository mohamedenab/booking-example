import {Component, OnInit} from '@angular/core';
import {DataService} from '../Booking.service';

@Component({
  selector: 'app-checkoutdata',
  templateUrl: './checkoutdata.component.html',
  styleUrls: ['./checkoutdata.component.scss']
})
export class CheckoutdataComponent implements OnInit {
  data: object;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.data;
    console.log(this.data);
  }

}
