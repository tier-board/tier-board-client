import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class CostForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      station: '',
      task: '',
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.cost || this.defaultState;

    this.state = {...initialState}
  }
  setDate = (e) => {
      e.preventDefault();
      let day = new Date(e);
      this.setState({date: day.toLocaleDateString("en-US")});
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.onComplete(this.state);
      this.props.viewChange();
      this.setState({...this.defaultState});
  };
  onChange = (e) => {
    const val =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  const changedBit = {
    [e.target.name]: val
  };
  this.setState(changedBit);
  }

  render() {
    return(
      <Fragment>
        <fieldset>
          <form onSubmit={this.onSubmit} onChange={this.onChange}>
            <label>Station
            <input name="station" type="text" value={this.state.station}/>
            </label>
            <label>Task
            <input name="task" type="text" value={this.state.task}/>
            </label>
            <button>{this.props.buttonText}</button>
          </form>
        </fieldset>
      </Fragment>
    );
  
}
}