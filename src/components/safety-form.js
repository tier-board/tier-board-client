import React, { PureComponent, Fragment } from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class safetyForm extends PureComponent {
  constructor(props) {
    super(props);
    this.defaultState = {
      incidents: '',
      response: '',
      safeDay: true,
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.safety || this.defaultState;

    this.state = {...initialState}
  }
//   setDate = (e) => {
//       e.preventDefault();
//       let day = new Date(e);
//       this.setState({date: day.toLocaleDateString("en-US")});
//   }

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
            <label>Safe Day?
            <input name="safeDay" type="checkbox" value = {this.state.safeDay}/>
            </label>
            <label>Incidents
            <input name="incidents" value = {this.state.incidents}/>
            </label>
            <label>Response
            <input name="response" type="text" value = {this.state.response}/>
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