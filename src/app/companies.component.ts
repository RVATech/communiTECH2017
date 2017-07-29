import { Component, OnInit } from '@angular/core';

import { Posting }        from './posting';
import { PostingService } from './posting.service';

@Component({
    selector: 'my-companies',
    templateUrl: './companies.component.html',
    styleUrls: [ './companies.component.css' ]
})
export class CompaniesComponent implements OnInit {
    postings: Posting[] = [];

    constructor(private postingService: PostingService) { }

    ngOnInit(): void {
        this.postingService.getPostings()
            .then(postings => this.postings = postings);
    }
}
