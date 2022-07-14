import { NgModule } from '@angular/core';
import { NgxAceComponent } from './ngx-ace.component';
import { PanoAceComponent } from './pano-ace/pano-ace.component';



@NgModule({
  declarations: [
    NgxAceComponent,
    PanoAceComponent
  ],
  imports: [
  ],
  exports: [
    NgxAceComponent
  ]
})
export class NgxAceModule { }
