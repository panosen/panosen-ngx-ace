import { ModuleWithProviders, NgModule } from '@angular/core';
import { PanoAceComponent } from './components/pano-ace/pano-ace.component';
import { DefaultPanoAceOptions, PanoAceOptionsToken } from './defaults';
import { PanoAceService } from './services/pano-ace.service';

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
export class PanosenAceModule {
    static forRoot(): ModuleWithProviders<PanosenAceModule> {
        return {
            ngModule: PanosenAceModule,
            providers: [{
                provide: PanoAceOptionsToken, useValue: DefaultPanoAceOptions
            }, PanoAceService]
        }
    }
}
