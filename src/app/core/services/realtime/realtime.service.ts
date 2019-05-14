import { Injectable } from "@angular/core";

import { interval } from "rxjs";
import { map, scan } from "rxjs/operators";

import {
    Xlength,
    offsetX,
    duration
} from "../../../realtime-data/chart-config";

@Injectable()
export class RealtimeService {
    /**
     *  Emits random number every second
     */
    public timer$;

    constructor() {
        this.timer$ = interval(duration).pipe(
            map((x, i) => [(i + Xlength) * offsetX, +Math.random().toFixed(2)]),
            scan((acc: Array<number>, n) => {
                if (acc.length > Xlength - 1) {
                    return [...acc.slice(1), n];
                } else {
                    return [...acc, n];
                }
            }, [])
        );
    }
}
