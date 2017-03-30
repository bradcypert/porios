import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Config } from '../config';
import { ApiService } from '../api';
import { Podcast } from './podcast';
import {
    User,
    UserService
} from '../user';

@Injectable()
export class PodcastService {

    constructor(
        private _api: ApiService,
        private _userService: UserService,
        private _snackBar: MdSnackBar
    ) {
    }

    public get(id?: number) {
        if (!id) {
            return this._api.getRequest('podcasts');
        } else {
            return this._api.getRequest('podcasts/' + id);
        }
    }

    public subscribe(podcast: Podcast) {
        let user: User;

        this._userService.whoami().subscribe((resUser: User) => {
            user = resUser;
            let data = {
                id: podcast.id,
                user_id: user.id
            };
            this._api.postRequest('podcasts/' + podcast.id + '/subscribe', data)
                .subscribe((res: Response) => {
                    if (res) {
                        this._snackBar.open('Subscribed!', 'Close', {
                            duration: 1500
                        });
                    }
                });
        });
    }

}
