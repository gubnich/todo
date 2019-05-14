import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscriber } from "rxjs";
import { map } from "rxjs/operators";

import * as d3 from "d3";

import { RealtimeService } from "../core/services/realtime/index";
import { SVGchart } from "../core/index";
import { Chart } from "./Chart";
import {
    Xlength,
    Ylength,
    offsetX,
    width,
    height,
    duration
} from "./chart-config";

@Component({
    selector: "app-realtime-data",
    templateUrl: "./realtime-data.component.html",
    styleUrls: ["./realtime-data.component.scss"]
})
export class RealtimeDataComponent implements OnInit, OnDestroy {
    /**
     * Random numbers service
     */
    private realtimeService: RealtimeService;

    /**
     *  Subscription to timer
     */
    private timer$: Subscriber<number>;

    /**
     *  SVG object
     */
    public chart: SVGchart;

    constructor() {
        this.realtimeService = new RealtimeService();
    }

    public ngOnInit() {
        this.chart = new Chart(Xlength, Ylength, height, width, offsetX);
        this.chart.axisX.call(d3.axisBottom(this.chart.scaleX));
        this.chart.axisY.call(d3.axisLeft(this.chart.scaleY));
        this.chart.path.datum(this.chart.data).attr("d", this.chart.line);
        this.timer$ = this.realtimeService.timer$
            .pipe(
                map((rand: Array<number>, i) => {
                    this.addPoint(rand[rand.length - 1]);
                    this.updateTo(rand, offsetX * i, i);
                })
            )
            .subscribe();
    }

    public ngOnDestroy() {
        this.timer$.unsubscribe();
    }

    /**
     *  Draws new line on the chart
     */
    private updateTo(data: Array<number>, offset: number, i: number): void {
        this.chart.path.datum(data).attr("d", this.chart.line);
        this.chart.runningBox
            .transition()
            .duration(duration)
            .ease(d3.easeLinear)
            .attr("transform", `translate(-${offset})`);

        this.chart.scaleX = d3.scaleLinear(
            [i - (Xlength - 2), i],
            [0, width + offsetX]
        );

        this.chart.axisX
            .attr("transform", `translate(${offsetX}, ${height})`)
            .call(d3.axisBottom(this.chart.scaleX));
    }

    /**
     *  Adds new text point to chart
     */
    private addPoint(coords: number) {
        this.chart.runningBox
            .append("text")
            .text(coords[1])
            .attr("x", coords[0])
            .attr("y", this.chart.scaleY(coords[1]))
            .attr("fill", "#3d675c");

        this.chart.runningBox.select("text").remove();
    }
}
