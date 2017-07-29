import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Profile } from './profile';

@Injectable()
export class ProfileService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private profilesUrl = 'api/profiles';  // URL to web api

    constructor(private http: Http) { }

    getProfiles(): Promise<Profile[]> {
        return this.http.get(this.profilesUrl)
            .toPromise()
            .then(response => response.json().data as Profile[])
            .catch(this.handleError);
    }


    getProfile(id: number): Promise<Profile> {
        const url = `${this.profilesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Profile)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.profilesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Profile> {
        return this.http
            .post(this.profilesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Profile)
            .catch(this.handleError);
    }

    update(profile: Profile): Promise<Profile> {
        const url = `${this.profilesUrl}/${profile.id}`;
        return this.http
            .put(url, JSON.stringify(profile), {headers: this.headers})
            .toPromise()
            .then(() => profile)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

