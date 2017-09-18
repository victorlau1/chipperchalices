import React, { Component } from 'react';
import axios from 'axios';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers} from 'rumble-charts';


class AnalyticsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {series: [{
      date: ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-02-05'],
      data: [10, 20, 0, 100, 250]
    }]};
    this.updateSeries = this.updateSeries.bind(this);
  }

  updateSeries(param) {
    console.log(this.getData(params));
    this.getData(params)
      .then((results) => {
        console.log(results.data);
        this.setState({series});
      });
  }

  getData(param) {
    var options = {      
    };
    return axios.get(`/data/${param}`, options);
  }

  componentDidMount() {
    this.updateSeries('users');
  }

  render() {
    return <Chart onClick={this.updateSeries} width={400} height={400} series={this.state.series} minY={0}>
      <Layer width='80%' height='80%' position='middle center'>
        <Animate _ease='bounce' _ease='elastic'>
          <Ticks
            axis='y'
            ticks={{maxTicks: 4}}
            tickVisible={({tick}) => tick.y > 0}
            lineLength='100%'
            lineVisible={true}
            lineStyle={{stroke:'lightgray'}}
            labelStyle={{textAnchor:'end',alignmentBaseline:'middle',fontSize:'0.5em',fill:'lightgray'}}
            labelAttributes={{x: -5}}
          />
          <Ticks
            axis='x'
            label={({index, props}) => props.series[0].date[index]}
            labelStyle={{textAnchor:'middle',alignmentBaseline:'before-edge',fontSize:'0.5em',fill:'lightgray'}}
            labelAttributes={{y: 3}}
          />
          <Bars
            groupPadding='3%'
            innerPadding='0.5%'
          />
          <Lines/>
          <Dots
          />
          <Labels
            label={({point}) => Math.round(point.y)}
            dotStyle={{
              alignmentBaseline: 'after-edge',
              textAnchor: 'middle'
            }}
          />
        </Animate>
      </Layer>
    </Chart>;
  }
}

export default AnalyticsBoard;