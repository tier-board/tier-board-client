import React, { Component, Fragment } from 'react';
import SafetyForm from './safety-form';
export default class SafetyItem extends Component {
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
      window.location.reload();//FIXME:this works, but need to find a better way than refreshing the whole page, same below
    }
  
 safetyUpdate = (safety) => {
  this.props.onComplete(safety);
  window.location.reload();
  }

  render() {
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <li class="list-wrapper">
              <div class="row">
                <div class="column">
                  <div class="column1">
                    <h3>INCIDENT</h3>
                    <p>{this.props.safety.incidents}</p>
                  </div>
                </div>
                <div class="column">
                  <div class="column2">
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