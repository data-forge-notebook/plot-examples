//
// This example modelled on the C3 example line chart.
//
// http://c3js.org/samples/simple_multiple.html
//

const data1 = [30, 200, 100, 400, 150, 250];
const data2 = [50, 20, 10, 40, 15, 25];

import { plot } from "plot";
import "@plotex/render-image";

import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output", outputName);
fs.emptyDirSync(outputPath);

async function main(): Promise<void> {
    const plt = plot({ data1, data2 });
    await plt.renderImage(path.join(outputPath, "image.png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


