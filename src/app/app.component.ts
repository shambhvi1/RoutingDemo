import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('angular is implemnting  change detection');
  }

  title = 'routing-demo';
  

}
