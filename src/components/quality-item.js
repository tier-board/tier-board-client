import React, { Component, Fragment } from 'react';
import QualityForm from './quality-form';
export default class QualityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    }
  }

  updateView = () => {
    this.setState({view: true});
  }
  returnView = () => {
    this.setState({view: false});
  }
  onRemove = () => {
      this.props.onRemove(this.props.quality);
 
    }
  
 qualityUpdate = (quality) => {
  this.props.onComplete(quality);


  }

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li className="list-wrapper">
              <div className="row">
                <div className="column">
                  <div className="column1">
                    <h3>STATION</h3>
                    <p>{this.props.quality.station}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column2">
                    <h3>ISSUE</h3>
                    <p>{this.props.quality.issue}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column3">
                    <h3>COUNTERMEASURE</h3>
                    <p>{this.props.quality.countermeasure}</p>
                  </div>
                </div>
              </div>
            </li>
            {this.state.view && <button onClick={this.onRemove}>Delete</button>}
         </div> 
         {this.state.view && <div><QualityForm onComplete={this.qualityUpdate} quality={this.props.quality} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
        </Fragment>
      );
  }
}