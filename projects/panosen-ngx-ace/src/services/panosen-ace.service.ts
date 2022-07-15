import { Inject, Injectable } from '@angular/core';
import { IPanosenAceOptions, IPanosenAceSettings, PanosenAceOptionsToken } from '../defaults';

declare const ace: any;

@Injectable({
    providedIn: 'root'
})
export class PanosenAceService {

    private promise: Promise<void> | undefined = undefined;

    constructor(@Inject(PanosenAceOptionsToken) private panoAceOptions: IPanosenAceOptions) {
    }

    get url(): string {
        return this.panoAceOptions.url;
    }

    get settings(): IPanosenAceSettings | undefined {
        return this.panoAceOptions.settings;
    }

    loaded(): Promise<void> {
        if (this.promise != undefined) {
            return this.promise;
        }

        this.promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.onload = () => {
                ace.config.set('basePath', this.url);
                resolve();
            }
            script.onerror = reject;
            script.src = `${this.url}/ace.min.js`;
            document.body.appendChild(script);
        })

        return this.promise;
    }
}
