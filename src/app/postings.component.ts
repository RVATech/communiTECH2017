import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {Posting} from "./posting";
import {PostingService} from "./posting.service";

@Component({
    selector: 'my-postings',
    templateUrl: './postings.component.html',
    styleUrls: [ './postings.component.css' ]
})
export class PostingsComponent implements OnInit {
    postings: Posting[];
    selectedPosting: Posting;

    constructor(
        private postingService: PostingService,
        private router: Router) { }

    getPostings(): void {
        this.postingService
            .getPostings()
            .then(postings => this.postings = postings);
    }

    add(title: string): void {
        title = title.trim();
        if (!title) { return; }
        this.postingService.create(title)
            .then(posting => {
                this.postings.push(posting);
                this.selectedPosting = null;
            });
    }

    delete(posting: Posting): void {
        this.postingService
            .delete(posting.id)
            .then(() => {
                this.postings = this.postings.filter(h => h !== posting);
                if (this.selectedPosting === posting) { this.selectedPosting = null; }
            });
    }

    ngOnInit(): void {
        this.getPostings();
    }

    onSelect(posting: Posting): void {
        this.selectedPosting = posting;
    }

    gotoDetail(): void {
        this.router.navigate(['/company_detail', this.selectedPosting.id]);
    }
}
