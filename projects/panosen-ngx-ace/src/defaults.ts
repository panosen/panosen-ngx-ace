import { InjectionToken } from "@angular/core";

export interface IPanosenAceSettings {
    mode?: string;
}

export interface IPanosenAceOptions {
    url: string,
    settings?: IPanosenAceSettings
}

export const DefaultPanosenAceOptions: IPanosenAceOptions = {

    //https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/ace.min.js
    //https://cdn.staticfile.org/ace/1.7.1/ace.min.js
    url: 'https://cdn.staticfile.org/ace/1.7.1'
};

export const PanosenAceOptionsToken = new InjectionToken<IPanosenAceOptions>('@pano/ngx-ace options.');
