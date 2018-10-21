import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class DeliveryForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      station: '',
      issue: '',
      countermeasure: '',
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.delivery || this.defaultState;

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
            {/* <label>A issue
                <input name="aIssues" type="checkbox" value={this.state.aIssues}/>
            </label>
            <label>C issue
                <input name="cIssues" type="checkbox" value={this.state.cIssues}/>
            </label> */}
            <label>Station
            <input name="station" type="text" value={this.state.station}/>
            </label>
            <label>Issue
            <input name="issue" type="text" value={this.state.issue}/>
            </label>
            <label>Countermeasure
            <input name="countermeasure" type="text" value={this.state.countermeasure}/>
            </label>
            {/* <label>Date
            <input name="date" type="date" value = {this.state.date}/>
            </label> */}
            <button>{this.props.buttonText}</button>
          </form>
        </fieldset>
      </Fragment>
    );
  
}
}