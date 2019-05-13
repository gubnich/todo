import * as d3 from "d3";

import { SVGchart } from "../core/index";

export class Chart implements SVGchart {
    public container;
    public viewbox;
    public runningBox;
    public line;
    public data;
    public scaleY;

    constructor(Xlength, Ylength, height) {
        const initialCoords = [0, 0];
        this.container = d3.select("path");
        this.viewbox = d3.select(".viewbox");
        this.runningBox = d3.select(".viewbox g");
        this.line = d3.line();
        this.scaleY = d3.scaleLinear([0, Ylength], [height, 0]);
        this.data = Array(Xlength).fill(initialCoords);
        this.data.forEach(() => {
            this.runningBox.insert("text");
        });
    }
}
