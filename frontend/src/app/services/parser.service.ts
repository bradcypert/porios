import { Injectable } from '@angular/core';

interface Window {
    DOMParser: any;
    ActiveXObject: any;
}

@Injectable()
export class ParserService {

    public parser: any;

    constructor( private _window: Window ) {
        if (typeof this._window.DOMParser != "undefined") {
            this.parser = function (xmlStr: any) {
                return (new DOMParser()).parseFromString(xmlStr, "text/xml");
            };
        } else if (typeof this._window.ActiveXObject != "undefined" && new ActiveXObject("Microsoft.XMLDOM")) {
            this.parser = function (xmlStr: any) {
                let xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error("No XML parser found");
        }
    }   

    parseXml(xmlStr: any) {
        return this.parser(xmlStr);
    }

}