import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Posting } from './posting';

@Injectable()
export class PostingService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private postingsUrl = 'api/postings';  // URL to web api

    constructor(private http: Http) { }

    getPostings(): Promise<Posting[]> {
        return this.http.get(this.postingsUrl)
            .toPromise()
            .then(response => response.json().data as Posting[])
            .catch(this.handleError);
    }


    getPosting(id: number): Promise<Posting> {
        const url = `${this.postingsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Posting)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.postingsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(title: string): Promise<Posting> {
        return this.http
            .post(this.postingsUrl, JSON.stringify({title: title}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Posting)
            .catch(this.handleError);
    }

    update(posting: Posting): Promise<Posting> {
        const url = `${this.postingsUrl}/${posting.id}`;
        return this.http
            .put(url, JSON.stringify(posting), {headers: this.headers})
            .toPromise()
            .then(() => posting)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

