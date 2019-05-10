import { Injectable } from "@angular/core";

import { timer, of, interval } from "rxjs";
import { take, map, switchMap, tap } from "rxjs/operators";

@Injectable()
export class RealtimeService {
    public timer$;
    constructor() {
        this.timer$ = interval(1000).pipe(
            // take(5),
            map(x => Math.random())
        );
    }
}
