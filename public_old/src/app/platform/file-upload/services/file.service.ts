import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';

export interface IUploadOptions {
  url: string;
  method: 'post' | 'put';
  file: File;
  filename: string;
  headers?: {[key: string]: string};
}

@Injectable()
export class TdFileService {

  private _progressSubject: Subject<number> = new Subject<number>();
  private _progressObservable: Observable<number>;

  /**
   * Gets progress observable to keep track of the files being uploaded.
   * Needs to be supported by backend.
   */
  get progress(): Observable<number> {
    return this._progressObservable;
  }

  constructor() {
    this._progressObservable = this._progressSubject.asObservable();
  }

  /**
   * params:
   * - options: IUploadOptions { 
   *     url: string, 
   *     method: 'post' | 'put',
   *     file: File,
   *     headers?: {[key: string]: string}
   * }
   * 
   * Uses underlying [XMLHttpRequest] to upload a file to a url.
   * Will be depricated when angular2 fixes [Http] to allow [FormData] as body.
   */
  upload(options: IUploadOptions): Observable<any> {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      let formData: FormData = new FormData();
      formData.append('file', options.file);
      formData.append('filename', options.filename); 

      xhr.onprogress = (event: ProgressEvent) => {
        let progress: number = 0;
        if (event.total > 0) {
          progress = Math.round(event.loaded / event.total * 100);
        }
        this._progressSubject.next(progress);
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 201) {
            subscriber.next(JSON.parse(xhr.response));
            subscriber.complete();
          } else {
            subscriber.error(xhr.response);
          }
        }
      };

      xhr.open(options.method, options.url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      if (options.headers) {
        for (let key in options.headers) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }

      xhr.send(formData);
    });
  }
}
