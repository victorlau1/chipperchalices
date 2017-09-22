import React, { Component } from 'react';
import axios from 'axios';
import { Chart, Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title, Layer, Animate, Transform, Handlers, DropShadow, Gradient, helpers} from 'rumble-charts';
import moment from 'moment';

class StatusChart extends Component {
  constructor(props) {
    super(props);
    this.state = {series: [{
      date: '2017-09-20',
      status: ['2017-09-18', '2017-09-19', '2017-09-20', '2017-09-21'],
      data: [5, 7, 10, 15, 20]
    }]
    };
    this.updateSeries = this.updateSeries.bind(this);
  }

  updateSeries() {
    if (moment(this.state.series[0].date[this.state.series[0].date.length - 1]).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')){
      return;
    }
    this.getData('status')
      .then((results) => {
        var status = [];
        var data = [];
        results.data.forEach((record) => {
          status.push(record.status);
          data.push(parseInt(record.status_count));
        });
        this.setState({ series: [{
          status: status,
          data: data,
          date: moment().format('MM-DD-YYYY')
        }]});
      });
  }

  getData(param) {
    var url = `/data/${param}`;
    var options = {      
    };
    return axios.get(url, options);
  }

  render() {
    return <div style={{fontFamily:'sans-serif',fontSize:'3em'}}><Chart onClick={this.updateSeries} width={800} height={400} series={this.state.series} minY={0}>
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
            label={({index, props}) => props.series[0].status[index]}
            labelStyle={{textAnchor:'middle',alignmentBaseline:'before-edge',fontSize:'0.5em',fill:'lightgray'}}
            labelAttributes={{y: 3}}
          />
          <Bars/>
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

export default StatusChart;