import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Change Detection Demo';
  _count = 1;
  Counter?: BehaviorSubject<any>;

  constructor() {
  }
  ngOnInit(): void {
    this.Counter = new BehaviorSubject<any>({
      count: 0
    })
  }

  inc(): void {
    //  this.Counter.count = this.Counter.count + 1;
    // this.Counter = {
    //   count : 9
    // }
    //   console.log(this.Counter.count);

    if (this.Counter != undefined) {
      this.Counter.next({ count: ++this._count })
    }

  }
}

