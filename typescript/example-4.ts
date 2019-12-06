//
// This example modelled on the C3 example line chart.
//
// http://c3js.org/samples/timeseries.html
//

const date = ["2013-01-01", "2013-01-02", "2013-01-03", "2013-01-04", "2013-01-05", "2013-01-06"];
const data1 = [30, 200, 100, 400, 150, 250];
const data2 = [130, 340, 200, 500, 250, 350];

import { plot } from "plot";
import "@plotex/render-image";
import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output", outputName);
fs.emptyDirSync(outputPath);

async function main(): Promise<void> {
    const plt = plot({ date, data1, data2 })
        .x()
            .setSeries("date")
        .y()
            .addSeries("data1")
        .y()
            .addSeries("data2");
    await plt.renderImage(path.join(outputPath, "image.png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


