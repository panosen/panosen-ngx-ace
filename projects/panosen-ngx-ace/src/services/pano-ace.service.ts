import { Inject, Injectable } from '@angular/core';
import { IPanoAceOptions, IPanoAceSettings, PanoAceOptionsToken } from '../defaults';

declare const ace: any;

@Injectable({
    providedIn: 'root'
})
export class PanoAceService {

    private promise: Promise<void> | undefined = undefined;

    constructor(@Inject(PanoAceOptionsToken) private panoAceOptions: IPanoAceOptions) {
    }

    get url(): string {
        return this.panoAceOptions.url;
    }

    get settings(): IPanoAceSettings | undefined {
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
