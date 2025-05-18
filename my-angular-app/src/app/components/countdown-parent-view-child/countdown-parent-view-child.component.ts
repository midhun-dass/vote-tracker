import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-view-child',
  templateUrl: './countdown-parent-view-child.component.html',
  styleUrls: ['./countdown-parent-view-child.component.scss']
})
export class CountdownParentViewChildComponent implements AfterViewInit{
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = () => this.timerComponent.seconds;
    });
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
