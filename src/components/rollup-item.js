import React, { Component, Fragment } from 'react';
import RollupForm from './rollup-form';
export default class RollupItem extends Component {
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
      this.props.onRemove(this.props.rollup);   
    }
  
 rollupUpdate = (rollup) => {
  this.props.onComplete(rollup);
  }

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li className="list-wrapper">
              <div className="row">
                <div className="column">
                  <div className="column1">
                    <h3>TOTAL VARIENCE</h3>
                    <p>{this.props.rollup.tVarience}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column2">
                    <h3>TOTAL COMPLETED</h3>
                    <p>{this.props.rollup.tCompleted}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column3">
                    <h3>END OF DAY</h3>
                    <p>{this.props.rollup.endOfDay}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column3">
                    <h3>AREA VARIENCE</h3>
                    <p>{this.props.rollup.areaVarience}</p>
                  </div>
                </div>
              </div>
            </li>
            {this.state.view && <button onClick={this.onRemove}>Delete</button>}
         </div> 
         {this.state.view && <div><RollupForm onComplete={this.rollupUpdate} rollup={this.props.rollup} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
        </Fragment>
      );
  }
}