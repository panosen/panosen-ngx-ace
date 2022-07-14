import { ModuleWithProviders, NgModule } from '@angular/core';
import { PanoAceComponent } from './components/pano-ace/pano-ace.component';
import { DefaultPanoAceOptions, PanoAceOptionsToken } from './defaults';

const COMPONENTS = [
    PanoAceComponent
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class NgxAceModule {
    static forRoot(): ModuleWithProviders<NgxAceModule> {
        return {
            ngModule: NgxAceModule,
            providers: [{
                provide: PanoAceOptionsToken, useValue: DefaultPanoAceOptions
            }]
        }
    }
}
