import { Injectable, Inject } from '@angular/core';

import { xml2json } from '../utils/xml2json';

interface Window {
    DOMParser: any;
    ActiveXObject: any;
}

class ActiveXObject {
    constructor(string: String) {

    }

    async: string;

    loadXML(xmlStr: string) {

    }
}

@Injectable()
export class ParserService {

    public parser: any;

    constructor( @Inject ('Window') private _window: Window ) {
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
        return JSON.parse(xml2json(this.parser(xmlStr), '  '));
    }

    getElementByNamespace(xmlStr: any, namespace: any, element: any) {
        let xmlElement = this.parser(xmlStr).getElementsByTagNameNS(namespace, element)[0];
        let jsonElement = JSON.parse(xml2json(xmlElement, '  '));
        return jsonElement[Object.keys(jsonElement)[0]]
    }

}