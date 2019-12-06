//
// This example modelled on the C3 example line chart.
//
// http://c3js.org/samples/timeseries.html
//

const x = ["2013-01-01", "2013-01-02", "2013-01-03", "2013-01-04", "2013-01-05", "2013-01-06"];
const data1 = [30, 200, 100, 400, 150, 250];
const data2 = [130, 340, 263, 300, 225, 315];

import { plot, ChartType } from "plot";
import "@plotex/render-image";
import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output", outputName);
fs.emptyDirSync(outputPath);

async function main(): Promise<void> {
    const plt = plot({
            x, data1, data2,
        },
        {
            x: {
                label: {
                    text: "Date",
                    font: {
                        size: "2em",
                        family: "Courier New"
                    },
                },
                ticks: {
                    font: {
                        size: "12px",
                        family: "Courier New"
                    },
                },
            },
            y: { 
                label: {
                    text: "Data 1",
                    font: {
                        size: "1.2em",
                        family: "Courier New"
                    },
                },
                ticks: {
                    font: {
                        size: "15px",
                        family: "Arial"
                    },
                },
            },
            y2: { 
                label: {
                    text: "Data 2",
                    font: {
                        size: "1.2em",
                        family: "Courier New"
                    },
                },
                ticks: {
                    font: {
                        size: "15px",
                        family: "Arial"
                    },
                },
            },
            legend: {
                show: true, //TODO: This should just default to true if the legend is configured.
                font: {
                    size: "12px",
                    family: "Courier New"
                },
            },
        },
        {
            y: {
                series: "data1",
                label: "Data 1", //TODO: This doesn't work yet.
            },
            y2: {
                series: "data2",
                label: "Data 2", //TODO: This doesn't work yet.
            },
        }
    );
    await plt.renderImage(path.join(outputPath, "image.png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


