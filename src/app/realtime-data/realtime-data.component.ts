import { Component, OnInit } from "@angular/core";
import { RealtimeService } from "../core/services/index";
import { map, tap, switchMap, scan, take } from "rxjs/operators";
import * as d3 from "d3";
import { of } from "rxjs";
import { transition } from "@angular/animations";
@Component({
    selector: "app-realtime-data",
    templateUrl: "./realtime-data.component.html",
    styleUrls: ["./realtime-data.component.css"]
})
export class RealtimeDataComponent implements OnInit {
    private realtimeService;
    public dataRow$;

    constructor() {
        this.realtimeService = new RealtimeService();
    }
    ngOnInit() {
        var cx = d3.scaleLinear([0, 100], [0, 600]);
        var cy = d3.scaleLinear([0, 1], [0, 400]);
        var svg = d3.select("path");
        var line = d3.line();
        // var data = [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]];
        var data = Array(10).fill(Array(2).fill(0));
        // var g = line([[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]]);

        svg.datum(data).attr("d", line);

        this.dataRow$ = this.realtimeService.timer$
            .pipe(
                map((x, i) => {
                    console.log("service", x, i);
                    data.push([(i + 10) * 30, cy(x)]);

                    svg.datum(data)
                        .attr("d", line)
                        .attr("transform", null)
                        .transition()
                        .duration(1000)
                        .ease(d3.easeLinear)
                        .attr("transform", `translate(-${30 * i})`);
                    data.shift();
                })
            )
            .subscribe();
    }
}
