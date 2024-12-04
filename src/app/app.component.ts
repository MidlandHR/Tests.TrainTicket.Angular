import { Component } from '@angular/core';
import { TrainTicketComponent } from './train-ticket/train-ticket.component';

@Component({
  imports: [TrainTicketComponent],
  selector: 'app-root',
  template: `
    <train-ticket></train-ticket>
  `,
  styles: []
})
export class AppComponent {
  title = 'tests-trainticket-angular';
}
