import React, { Component, Fragment } from 'react';
import CostForm from './cost-form';
export default class CostItem extends Component {
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
      this.props.onRemove(this.props.cost);

    }
  
 costUpdate = (cost) => {
  this.props.onComplete(cost);


  }

  render() {
    let {cost: {station, task}} = this.props;
      return(
        <Fragment>
         <div onDoubleClick={this.updateView}>
            <div className="list-wrapper">
              <div className="row">
                <div className="column">
                  <div className="column1">
                    <h3>STATION</h3>
                    <p>{station}</p>
                  </div>
                </div>
                <div className="column">
                  <div className="column2">
                    <h3>TASK</h3>
                    <p>{task}</p>
                  </div>
                </div>
              </div>
            </div>
            {this.state.view && <button onClick={this.onRemove}>Delete</button>}
         </div> 
         {this.state.view && 
           <div>
             <CostForm 
               onComplete={this.costUpdate} 
               cost={this.props.cost} 
               viewChange={this.returnView} 
               onClick={this.props.returnView} 
               buttonText = 'save update'
             />
             <button onClick={this.returnView}>cancel update</button>
          </div>}
        </Fragment>
      );
  }
}