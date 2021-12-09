import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainTicketComponent } from './train-ticket/train-ticket.component';

@NgModule({
    declarations: [
        AppComponent,
        TrainTicketComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
