import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscriber } from "rxjs";
import { map } from "rxjs/operators";

import * as d3 from "d3";

import { RealtimeService } from "../core/services/index";
import { SVGchart } from "../core/index";
import { Chart } from "./Chart";

/**
 *  A pixels increment on X axis
 */
const offsetX: number = 80;

/**
 *  Animation duration
 */
const duration: number = 1000;

/**
 *  Axis X visible length
 */
const Xlength: number = 10;

/**
 *  Axis Y visible length
 */
const Ylength: number = 1;

/**
 *  Chart px height
 */
const height: number = 400;

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
        this.chart = new Chart(Xlength, Ylength, height);
        this.chart.runningBox.attr("transform", `translate(-${offsetX})`);
        this.chart.container.datum(this.chart.data).attr("d", this.chart.line);
        // Pushing new coordinates to the data array and throwing it to update the chart`s view
        this.timer$ = this.realtimeService.timer$
            .pipe(
                map((rand, i) => {
                    const newPoint = [this.newX(i + Xlength), this.newY(rand)];
                    this.chart.data.push(newPoint);
                    this.addPoint(newPoint, rand);
                    this.updateTo(this.chart.data, offsetX * i);
                    this.chart.data.shift();
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
    private updateTo(data, offset): void {
        this.chart.container.datum(data).attr("d", this.chart.line);
        this.chart.viewbox
            .transition()
            .duration(duration)
            .ease(d3.easeLinear)
            .attr("transform", `translate(-${offset})`);
    }

    /**
     *  Adds new text point to chart
     */
    private addPoint(coords, text) {
        this.chart.runningBox
            .append("text")
            .text(text)
            .attr("x", coords[0])
            .attr("y", coords[1])
            .attr("fill", "#3d675c");

        this.chart.runningBox.select("text").remove();
    }

    /**
     *  Returns new X coordinate
     */
    private newX(serialNumber) {
        return serialNumber * offsetX;
    }

    /**
     *  Returns new Y coordinate
     */
    private newY(num) {
        return this.chart.scaleY(num);
    }
}
