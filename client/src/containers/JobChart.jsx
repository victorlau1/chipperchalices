import React, { Component } from 'react';
import axios from 'axios';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers} from 'rumble-charts';
import moment from 'moment';

class JobChart extends Component {
  constructor(props) {
    super(props);
    this.state = {series: [{
      date: ['2017-09-18', '2017-09-19', '2017-09-20', '2017-09-21'],
      data: [2, 2, 2, 2, 2]
    }]};
    this.updateSeries = this.updateSeries.bind(this);
  }

  updateSeries() {
    if (moment(this.state.series[0].date[this.state.series[0].date.length]).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')){
      return;
    }
    this.getData('jobs')
      .then((results) => {
        var date = [];
        var data = [];
        results.data.forEach((record) => {
          date.push(record.date.slice(0 ,10));
          data.push(parseInt(record.job_count));
        });
        this.setState({ series: [{
          date: date,
          data: data
        }]
        });
      });
  }

  getData(param) {
    var url = `/data/${param}`;
    var options = {      
    };
    return axios.get(url, options);
  }

  render() {
    return <div style={{fontFamily:'sans-serif',fontSize:'2em'}}><Chart onClick={this.updateSeries} width={800} height={400} series={this.state.series} minY={0}>
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
    </Chart></div>;
  }
}

export default JobChart;