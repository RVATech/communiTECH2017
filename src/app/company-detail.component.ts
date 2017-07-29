import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Posting }        from './posting';
import { PostingService } from './posting.service';

@Component({
    selector: 'company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: [ './company-detail.component.css' ]
})
export class CompanyDetailComponent implements OnInit {
    posting: Posting;

    constructor(
        private postingService: PostingService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.postingService.getPosting(+params.get('id')))
            .subscribe(posting => this.posting = posting);
    }

    save(): void {
        this.postingService.update(this.posting)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
