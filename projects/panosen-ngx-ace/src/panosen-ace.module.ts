import { ModuleWithProviders, NgModule } from '@angular/core';
import { PanosenAceComponent } from './components/panosen-ace/panosen-ace.component';
import { DefaultPanosenAceOptions, PanosenAceOptionsToken } from './defaults';
import { PanosenAceService } from './services/panosen-ace.service';

const COMPONENTS = [
    PanosenAceComponent
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
                provide: PanosenAceOptionsToken, useValue: DefaultPanosenAceOptions
            }, PanosenAceService]
        }
    }
}
