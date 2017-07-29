import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryPostingsService implements InMemoryDbService {
    createDb() {
        const postings = [
            { id: 0,  description: 'work a bunch', title: 'Person', owner_id: 5, category: 'Health', start_dt: new Date("February 4, 2016 10:13:00"), end_dt: new Date("February 20, 2016 10:13:00"), name: "Job" },
            { id: 1,  description: 'work even more', title: 'Cool Person', owner_id: 6, category: 'Transportation', start_dt: new Date("February 4, 2016 10:13:00"), end_dt: new Date("February 20, 2016 10:13:00"), name: "Otherjob"}
        ];
        return {postings};
    }
}
