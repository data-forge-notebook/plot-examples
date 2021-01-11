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
const outputPath = path.join("./output");

async function main(): Promise<void> {
    const plt = plot(
        { 
            data1: {
                values: data1,
                annotations: [
                    {
                        value: 200,
                        text: "A good value",
                        style: "annotation1",
                    }                    
                ]
            }, 
            data2: data2,
        },
        {
            annotations: {
                annotation1: {
                    lineColor: "red",
                    label: {
                        font: {
                            color: "red",
                        }
                    }
                }
            }
        }
    );
    await plt.renderImage(path.join(outputPath, outputName + ".png"), { openImage: false });
}

main()
    .then(() => console.log("Done"))
    .catch(err => console.error(err && err.stack || err));


