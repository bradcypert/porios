import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb';

@Injectable()
export class DBService {

  public put(dbName: string, doc: any, identifier?: string): Promise<any> {
    let db = new PouchDB(dbName);

    if (!identifier) {
      identifier = 'id';
    }

    if (!doc[identifier]) {
      return;
    }

    doc['_id'] = doc[identifier];

    return db.get(doc[identifier])
      .then((res) => {
        doc['_rev'] = res['_rev'];
        return db.put(doc).catch((c) => {
          return this._handleError(c);
        });
      }).catch((a) => {
        if (a.name === 'not_found') {
          return db.put(doc).catch((b) => {
            return this._handleError(b);
          });
        } else {
          return this._handleError(a);
        }
      });
  }

  public get(dbName: string, id: any): Promise<any> {
    let db = new PouchDB(dbName);

    return db.get(id).catch((err) => {
      return this._handleError(err);
    });
  }

  public destroy(dbName: string) {
    let db = new PouchDB(dbName);

    return db.destroy().catch((err) => {
      return this._handleError(err);
    });
  }

  private _handleError(err: any) {
    return err.name;
    // throw new Error(err);
  }

}
