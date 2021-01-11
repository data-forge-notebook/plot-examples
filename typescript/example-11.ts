//
// Example of rendering a line chart from real data.
//

import { plot } from "plot";
import "@plotex/render-image";
import { readCsv } from "datakit";
import * as fs from "fs-extra";
import * as path from "path";

const outputName = path.basename(__filename, ".ts");
const outputPath = path.join("./output");

async function main(): Promise<void> {

    let data = await readCsv("./STW.csv");
    const bars = data.map((row: any) => ({
        date: row.date,
        candle: [
            row.open,
            row.high,
            row.low,
            row.close,
        ],
    }))
    const plt = plot(bars, { chartType: "candlestick" }, { x: "date", y: "candle" });
    await plt.renderImage(path.join(outputPath, outputName + ".png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


