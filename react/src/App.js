import React from 'react';

const { plot } = require("plot");
require("@plotex/render-dom");

class App extends React.Component {

    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const data = [ { A: 15 }, { A: 8 }, { A: 32 }, { A: 10 }, { A: 15 }, { A: 28 } ];
        plot(data).renderDOM(this.chartRef.current)
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
