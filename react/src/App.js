import React from 'react';

const { plot } = require("plot");
require("@plotex/render-dom");

class App extends React.Component {

    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        // Data can be supplied in various formats.
        //const data = [ 15, 8, 32, 10, 15, 28 ];
        //const data = [ { A: 15 }, { A: 8 }, { A: 32 }, { A: 10 }, { A: 15 }, { A: 28 } ];
        //const data = { A: [ 15, 8, 32, 10, 15, 28 ] };
        const data = {
            A: {
                values: [ 15, 8, 32, 10, 15, 28 ],
                annotations: [
                    {
                        value: 15,
                        text: "Simply amazing!",
                        style: "red",
                    },
                ],
            },
        };
        const config = {
            annotations: {
                red: {
                    lineColor: "red",
                    label: {
                        font: {
                            color: "red",
                        },
                    },
                },
            },
        }

        plot(data, config)
            .renderDOM(this.chartRef.current)
            .then(chart => {
                this.chart = chart;
            });
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.unmount();
            delete this.chart;
        }
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div ref={this.chartRef} />
            </div>
        );
    }
}

export default App;
