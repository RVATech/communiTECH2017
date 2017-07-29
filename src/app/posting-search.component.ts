import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PostingSearchService } from './posting-search.service';
import { Posting } from './posting';

@Component({
    selector: 'posting-search',
    templateUrl: './posting-search.component.html',
    styleUrls: [ './posting-search.component.css' ],
    providers: [PostingSearchService]
})
export class PostingSearchComponent implements OnInit {
    posting: Observable<Posting[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private postingSearchService: PostingSearchService,
        private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.posting = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.postingSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Posting[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Posting[]>([]);
            });
    }

    gotoDetail(posting: Posting): void {
        let link = ['/company_detail', posting.id];
        this.router.navigate(link);
    }
}
