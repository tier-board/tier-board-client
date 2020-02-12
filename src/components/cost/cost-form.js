import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
import FormInput from '../form-input/form-input.component';
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
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  render() {
    return(
        <div class="form-wrapper">
        <fieldset>
          <form onSubmit={this.onSubmit}>
            <FormInput 
              name='station'
              label='Station' 
              onChange={this.handleChange}
              value={this.state.station}
            />

            <FormInput 
              name='task'
              label='Task' 
              onChange={this.handleChange}
              value={this.state.task}
            />

            <button>{this.props.buttonText}</button>
          </form>
        </fieldset>
        </div>
    );
  
}
}
