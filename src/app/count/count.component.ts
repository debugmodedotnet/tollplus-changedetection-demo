// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-count',
//   templateUrl: './count.component.html',
//   styleUrls: ['./count.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CountComponent implements OnInit , OnChanges , OnDestroy {

//   @Input() Counter? : Observable<any>; 
//   count = 0; 
//   CounterSubscription? : Subscription; 
//   constructor(private cd : ChangeDetectorRef) { 
//    // this.cd.detach();
//   }
//   ngOnInit(): void {
//     console.log('init');
//     this.CounterSubscription =  this.Counter?.subscribe((data:any)=>{
//       this.count = data.count; 
//      //console.log(this.count);
//      this.cd.markForCheck();
//       //this.cd.detectChanges();
//     } )
//   }
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('changes');
//   }
//   ngOnDestroy(): void {
//     if(this.CounterSubscription != undefined){
//       this.CounterSubscription.unsubscribe(); 
//     }
//   }
// }



// on push 
// subscribe 
// run cd manually 
// unsubscribe 



import {  ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountComponent {

  @Input() Counter? : Observable<any>; 
}