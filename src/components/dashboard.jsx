import React from 'react';

import CostContainer from './cost/cost-container';
import DeliveryContainer from './delivery/delivery.container';
import MoraleContainer from './morale/morale-container';
import QualityContainer from './quality/quality-container';
import RollupContainer from './rollup/rollup-component';
import SafetyContainer from './safety/safety-container';


// import dateFormat from 'dateformat';
// const now = new Date();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date,
    };
  }

      updateDate = (e) => {
        let newDate = e.target.value;
        console.log(newDate);
        this.setState({date: newDate});

      }

      render() {

        return (
       
          <div>
            <h1>Tier Board Data</h1>
            <input onChange={this.updateDate} type='date' defaultValue={this.state.date} value={this.state.date}></input>
            <h2>{this.state.date}</h2>
            <SafetyContainer/>
            <QualityContainer/>
            <RollupContainer/>
            <DeliveryContainer/>
            <CostContainer/>
            <MoraleContainer/>
          </div>
        );
      }
}

export default (Dashboard);