import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SampleComponent),
        multi: true
    }]
})
export class SampleComponent implements OnInit, ControlValueAccessor {

    zz: string = 'aa';

    nn: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    onClick(): void {
        this.nn++;
        this.zz = this.nn + '';

        this.propagateChange(this.nn + '');
    }

    propagateChange: (_: any) => void = () => { };
    propagateTouched: (_: any) => void = () => { };

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    writeValue(obj: string): void {
        this.zz = obj;
    }
}
