import * as d3 from "d3";

import { SVGchart } from "../core/index";

export class Chart implements SVGchart {
    public path;
    public viewbox;
    public runningBox;
    public line;
    public data;
    public scaleX;
    public scaleY;
    public axisX;
    public axisY;

    constructor(
        Xlength: number,
        Ylength: number,
        height: number,
        width: number,
        offset: number
    ) {
        const initialCoords = [0, 0];
        const totalWidth = width + offset;
        this.viewbox = d3
            .select(".viewbox")
            .attr("transform", `translate(-${offset})`);
        this.runningBox = d3.select(".running");
        this.path = d3.select(".path");
        this.axisY = d3.select(".axisY");
        this.axisX = d3
            .select(".axisX")
            .attr("transform", `translate(${offset}, ${height})`);

        this.line = d3
            .line()
            .x(d => {
                return d[0];
            })
            .y(d => {
                return this.scaleY(d[1]);
            });
        this.scaleY = d3.scaleLinear([0, Ylength], [height, 0]);
        this.scaleX = d3.scaleLinear([-Xlength + 1, -1], [0, totalWidth]);
        this.data = Array(Xlength).fill(initialCoords);
        this.data.forEach(() => {
            this.runningBox.insert("text");
        });
    }
}
