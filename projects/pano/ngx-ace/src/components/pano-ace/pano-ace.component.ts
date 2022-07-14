import { Component, ElementRef, forwardRef, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PanoAceService } from '../../services/pano-ace.service';

declare const ace: any;

@Component({
    selector: 'pano-ace',
    templateUrl: './pano-ace.component.html',
    styleUrls: ['./pano-ace.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PanoAceComponent),
        multi: true
    }]
})
export class PanoAceComponent implements OnInit, ControlValueAccessor, OnChanges {

    private editor: any = undefined;

    private value: string = '';

    @Input()
    mode?: string;

    @Input()
    theme?: string;

    @Input()
    disabled?: boolean;

    @Input()
    fontSize?: number = 16;

    constructor(private element: ElementRef,
        private panoAceService: PanoAceService,
        private zone: NgZone) {
    }

    ngOnInit(): void {
        this.zone.runOutsideAngular(() => {
            this.panoAceService.loaded().then(() => {
                this.zone.run(() => {
                    this.editor = ace.edit(this.element.nativeElement);
                    if (this.panoAceService.settings) {
                        this.editor.setOptions(this.panoAceService.settings);
                    }
                    this.ngOnChanges({});

                    this.editor.setValue(this.value, -1);
                    this.editor.on('change', this.onEditorValueChange.bind(this));
                    this.editor.on('blur', this.onEditorBlurred.bind(this));
                })
            })
        });
    }

    onEditorValueChange() {
        this.propagateChange(this.editor.getValue());
    }

    onEditorBlurred() {
        this.propagateTouched(this.editor.getValue());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.editor == undefined) {
            return;
        }
        this.editor.setReadOnly(!!this.disabled);
        if (this.mode) {
            this.editor.session.setMode(`ace/mode/${this.mode}`);
        }
        if (this.theme) {
            this.editor.setTheme(`ace/theme/${this.theme}`);
        }
        if (this.fontSize) {
            this.editor.setFontSize(this.fontSize);
        }
    }

    // #region ControlValueAccessor

    propagateChange: (_: any) => void = () => { };
    propagateTouched: (_: any) => void = () => { };

    writeValue(value: string): void {
        this.value = value || '';
        if (!this.editor) {
            return;
        }
        this.editor.setValue(value, -1);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState?(disabled: boolean): void {
        this.disabled = disabled;
    }

    // #endregion ControlValueAccessor
}
