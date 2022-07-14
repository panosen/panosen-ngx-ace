import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
        FormsModule
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class PanosenAceModule {
    static forRoot(): ModuleWithProviders<PanosenAceModule> {
        return {
            ngModule: PanosenAceModule,
            providers: [{
                provide: PanoAceOptionsToken, useValue: DefaultPanoAceOptions
            }]
        }
    }
}
