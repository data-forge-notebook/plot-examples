//
// This example modelled on the C3 example line chart.
//
// http://c3js.org/samples/chart_bar.html
//

const data1 = [30, 200, 100, 400, 150, 250];
const data2 = [130, 100, 140, 200, 150, 50];
const data3 = [130, -150, 200, 300, -200, 100];

import { plot, ChartType } from "plot";
import "@plotex/render-image";
import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output");

async function main(): Promise<void> {
    const plt = plot({ data1, data2, data3 }, { chartType: ChartType.Bar });
    await plt.renderImage(path.join(outputPath, outputName + ".png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


