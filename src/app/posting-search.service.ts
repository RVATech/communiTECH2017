import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Posting } from './posting';

@Injectable()
export class PostingSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Posting[]> {
        return this.http
            .get(`api/postings/?name=${term}`)
            .map(response => response.json().data as Posting[]);
    }
}
