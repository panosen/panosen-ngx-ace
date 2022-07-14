import { InjectionToken } from "@angular/core";

export interface IPanoAceSettings {
    mode?: string;
}

export interface IPanoAceOptions {
    url: string,
    settings?: IPanoAceSettings
}

export const DefaultPanoAceOptions: IPanoAceOptions = {

    //https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.min.js
    //https://cdn.staticfile.org/ace/1.7.1/ace.min.js
    url: 'https://cdn.staticfile.org/ace/1.7.1'
};

export const PanoAceOptionsToken = new InjectionToken<IPanoAceOptions>('@pano/ngx-ace options.');
