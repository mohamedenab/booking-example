import {DataService} from './Booking.service';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';
import {Router} from '@angular/router';


const getOptions = (options: string[], except: string) =>
  options.filter(option => option !== except);

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  form = this.fb.group({
    to: ['', Validators.required],
    from: ['', Validators.required],
    date: [null, Validators.required],
    passengers: ['', Validators.required],
    passengersData: this.fb.array([])
  });
  options: string[] = ['Egypt', 'Dubai', 'China'];
  numbers = Array(10).fill(0).map((x, i) => i).splice(1, 9);

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.form.get('passengers').valueChanges.subscribe(value => {
      this.form.setControl(
        'passengersData',
        this.fb.array(
          new Array(+value).fill(0).map(f =>
            this.fb.group({
              firstName: ['', [Validators.required]],
              lastName: ['', [Validators.required]],
              birthDay: ['', [Validators.required]],
              phone: ['', [Validators.required, Validators.pattern('^((0)[0-9]{10})$')]
              ]
            })
          )
        )
      );
    });
  }

  get passengersData() {
    return this.form.get('passengersData') as FormArray;
  }

  checkout() {
    this.dataService.setData(this.form.value);
    this.route.navigate(['checkout']);
  }

  get fromChoices() {
    return getOptions(this.options, this.form.get('to').value);
  }

  get toChoices() {
    return getOptions(this.options, this.form.get('from').value);
  }
}
