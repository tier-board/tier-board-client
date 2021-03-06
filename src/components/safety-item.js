import React, { PureComponent, Fragment } from 'react';
import SafetyForm from './safety-form';
export default class SafetyItem extends PureComponent {
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
      this.props.onRemove(this.props.safety);
     // window.location.reload();
     // this.forceUpdate();
    }
  
 safetyUpdate = (safety) => {
  this.props.onComplete(safety);

  }

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li className="list-wrapper">
              <div className="row">
                <div className="column">
                  <div className="column1">
                    <h3>INCIDENT</h3>
                    <p>{this.props.safety.incidents}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column2">
                    <h3>RESPONSE</h3>
                    <p>{this.props.safety.response}</p>
                  </div>
                </div>
              </div>
            </li>
            {this.state.view && <button onClick={this.onRemove}>Delete</button>}
         </div> 
         {this.state.view && <div><SafetyForm onComplete={this.safetyUpdate} safety={this.props.safety} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
        </Fragment>
      );
  }
}