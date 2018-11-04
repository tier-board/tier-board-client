import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class RollupForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      tVarience: '',
      tCompleted: '',
      endOfDay: '',
      areaVarience: '',
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.delivery || this.defaultState;

    this.state = {...initialState}
  }
  // setDate = (e) => {
  //     e.preventDefault();
  //     let day = new Date(e);
  //     this.setState({date: day.toLocaleDateString("en-US")});
  // }

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
        <div class="form-wrapper">
        <fieldset>
          <form onSubmit={this.onSubmit} onChange={this.onChange}>
            <label>Total Varience
            <input name="tVarience" type="text" value={this.state.tVarience}/>
            </label>
            <label>Total Completed
            <input name="tCompleted" type="text" value={this.state.tCompleted}/>
            </label>
            <label>End Of Day
            <input name="endOfDay" type="text" value={this.state.endOfDay}/>
            </label>
            <label>Area Varience
            <input name="areaVarience" type="text" value = {this.state.areaVarience}/>
            </label>
            <button>{this.props.buttonText}</button>
          </form>
        </fieldset>
        </div>
      </Fragment>
    );
  
}
}