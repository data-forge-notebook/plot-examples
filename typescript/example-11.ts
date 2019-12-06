//
// Example of rendering a line chart from real data.
//

import { plot } from "plot";
import "@plotex/render-image";
import { readCsv } from "daki";
import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output", outputName);
fs.emptyDirSync(outputPath);

async function main(): Promise<void> {

    const data = await readCsv("./STW.csv");
    const plt = plot(data, {}, { x: "date", y: "close" });
    await plt.renderImage(path.join(outputPath, "image.png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


