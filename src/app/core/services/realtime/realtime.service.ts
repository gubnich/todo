import { Injectable } from "@angular/core";

import { timer } from "rxjs";
import { take, map } from "rxjs/operators";

@Injectable()
export class RealtimeService {
    public timer$;
    constructor() {
        this.timer$ = timer(500, 1000).pipe(
            // take(5),
            map(x => Math.random())
        );
    }
}
