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
        // this.dataRow$ = this.realtimeService.timer$
        //     .pipe(
        //         take(5),
        //         scan((acc, x) => [...acc, Math.random()], []),
        //         map(x => {
        //             console.log(x);

        //         })
        //         // tap(console.log)
        //     )
        //     .subscribe();

        // d3.select("body")
        //     .selectAll("p")
        //     .data([4, 8, 15, 16, 23, 42, 99])
        //     .enter()
        //     .append("p")
        //     .text(function(d) {
        //         return "I’m number " + d + "!";
        //     });
    }
    ngOnInit() {
        this.dataRow$ = this.realtimeService.timer$
            .pipe(
                // take(5),
                scan((acc, x) => [...acc, Math.random()], [0]),
                tap(data => {
                    console.log("x", data);
                    var svgWidth = 600,
                        svgHeight = 400;
                    var margin = { top: 20, right: 20, bottom: 30, left: 50 };
                    var width = svgWidth - margin.left - margin.right;
                    var height = svgHeight - margin.top - margin.bottom;

                    var svg = d3
                        .select("svg")
                        .attr("width", "100vw")
                        .attr("height", svgHeight);

                    // var g = svg
                    //     .append("g")
                    //     .attr(
                    //         "transform",
                    //         "translate(" + margin.left + "," + margin.top + ")"
                    //     );

                    // var x = d3.scaleTime().rangeRound([0, width]);
                    var x = d3.scaleLinear([0, 5], [0, width]);

                    // var y = d3.scaleLinear().rangeRound([height, 0]);
                    var y = d3.scaleLinear([0, 1], [height, 0]);

                    var line = d3
                        .line()
                        .x(function(d, i) {
                            console.log(i);
                            return x(i);
                        })
                        .y(function(d, i) {
                            console.log(d);

                            return y(d);
                        });
                    x.domain(
                        d3.extent(data, function(d, i) {
                            return i;
                        })
                    );
                    y.domain(
                        d3.extent(data, function(d, i) {
                            return d;
                        })
                    );
                    svg.select("path")
                        .datum(data)
                        .attr("fill", "none")
                        .attr("stroke", "steelblue")
                        .attr("stroke-linejoin", "round")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-width", 1.5)
                        .transition()
                        .attr("d", line);
                })
                // tap(console.log)
            )
            .subscribe();

        // d3.selectAll(".par")
        //     .data([4, 7, 8, 9, 1])
        //     .enter()
        //     .append("p")
        //     .text(function(d) {
        //         return "I’m number " + d + "!";
        //     })
        //     .exit()
        //     .remove();

        // var data = [
        //     { date: new Date(2007, 3, 24), value: 93.24 },
        //     { date: new Date(2007, 3, 25), value: 95.35 },
        //     { date: new Date(2007, 3, 26), value: 98.84 },
        //     { date: new Date(2007, 3, 27), value: 99.92 },
        //     { date: new Date(2007, 3, 30), value: 99.8 },
        //     { date: new Date(2007, 4, 1), value: 99.47 }
        // ];
        // var data = [
        //     { date: 1, value: 0.24 },
        //     { date: 2, value: 0.35 },
        //     { date: 3, value: 0.35 },
        //     { date: 4, value: 0 },
        //     { date: 5, value: 0.8 }
        //     // { date: 6, value: 0.7 },
        //     // { date: 7, value: 0.87 },
        //     // { date: 8, value: 0.97 },
        //     // { date: 9, value: 0.47 },
        //     // { date: 10, value: 0.17 },
        //     // { date: 11, value: 0.7 },
        //     // { date: 12, value: 0.47 }
        // ];
        // var svgWidth = 600,
        //     svgHeight = 400;
        // var margin = { top: 20, right: 20, bottom: 30, left: 50 };
        // var width = svgWidth - margin.left - margin.right;
        // var height = svgHeight - margin.top - margin.bottom;

        // var svg = d3
        //     .select("svg")
        //     .attr("width", svgWidth)
        //     .attr("height", svgHeight);

        // var g = svg
        //     .append("g")
        //     .attr(
        //         "transform",
        //         "translate(" + margin.left + "," + margin.top + ")"
        //     );

        // // var x = d3.scaleTime().rangeRound([0, width]);
        // var x = d3.scaleLinear([0, 5], [0, width]);

        // // var y = d3.scaleLinear().rangeRound([height, 0]);
        // var y = d3.scaleLinear([0, 1], [height, 0]);

        // var line = d3
        //     .line()
        //     .x(function(d, i) {
        //         console.log(i);
        //         return x(d.date);
        //     })
        //     .y(function(d) {
        //         console.log(d.value);

        //         return y(d.value);
        //     });
        // x.domain(
        //     d3.extent(data, function(d) {
        //         return d.date;
        //     })
        // );
        // y.domain(
        //     d3.extent(data, function(d) {
        //         return d.value;
        //     })
        // );

        // g.append("g")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(x))
        //     .select(".domain")
        //     .remove();

        // g.append("g")
        //     .call(d3.axisLeft(y))
        //     .append("text")
        //     .attr("fill", "#000")
        //     .attr("transform", "rotate(-90)")
        //     .attr("y", 6)
        //     .attr("dy", "0.71em")
        //     .attr("text-anchor", "end")
        //     .text("Price ($)");

        // g.append("path")
        //     .datum(data)
        //     .attr("fill", "none")
        //     .attr("stroke", "steelblue")
        //     .attr("stroke-linejoin", "round")
        //     .attr("stroke-linecap", "round")
        //     .attr("stroke-width", 1.5)
        //     .attr("d", line);

        // svg.append("path")
        //     .datum(data)
        //     .attr("fill", "none")
        //     .attr("stroke", "steelblue")
        //     .attr("stroke-linejoin", "round")
        //     .attr("stroke-linecap", "round")
        //     .attr("stroke-width", 1.5)
        //     .attr("d", line);
    }

    // ngOnInit() {
    //     this.dataRow$ = this.realtimeService.timer$
    //         .pipe(tap(console.log))
    //         .subscribe();
    // }
}
