import React, { Component, Fragment } from 'react';
import MoraleForm from './morale-form';
export default class MoraleItem extends Component {
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
      this.props.onRemove(this.props.morale);

    }
  
 moraleUpdate = (morale) => {
  this.props.onComplete(morale);


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
                    <p>{this.props.morale.station}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column2">
                    <h3>TASK</h3>
                    <p>{this.props.morale.task}</p>
                  </div>
                </div>
              </div>
            </li>
            {this.state.view && <button onClick={this.onRemove}>Delete</button>}
         </div> 
         {this.state.view && <div><MoraleForm onComplete={this.moraleUpdate} morale={this.props.morale} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
        </Fragment>
      );
  }
}