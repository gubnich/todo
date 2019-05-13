import { Injectable } from "@angular/core";

import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RealtimeService {
    /**
     *  Emits random number every second
     */
    public timer$;

    constructor() {
        this.timer$ = interval(1000).pipe(map(() => Math.random().toFixed(2)));
    }
}
