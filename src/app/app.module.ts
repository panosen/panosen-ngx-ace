import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PanosenAceModule } from '../../projects/panosen-ngx-ace/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
    declarations: [
        AppComponent,
        SampleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PanosenAceModule.forRoot(),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
