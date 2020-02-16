import React from 'react';
import { connect } from 'react-redux';

const MetricItem = ({ title, station, issue, countermeasure, view, incidents, response, totalVarience }) => (
  <div>
    <div onDoubleClick={updateView}>
      <li className="list-wrapper">
        <div className="row">
          <div className="column">
            <div className="column1">
              <h3>STATION</h3>
              <p>{station}</p>
            </div>
          </div>
          <div className="column">
            <div className="column2">
              <h3>ISSUE</h3>
              <p>{issue}</p>
            </div>
          </div>
          <div className="column">
            <div className="column3">
              <h3>COUNTERMEASURE</h3>
              <p>{countermeasure}</p>
            </div>
          </div>
        </div>
      </li>
      {this.state.view && <button onClick={this.onRemove}>Delete</button>}
    </div> 
    {this.state.view && <div><DeliveryForm onComplete={this.deliveryUpdate} delivery={this.props.delivery} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
  </div>
);

export default MetricItem;