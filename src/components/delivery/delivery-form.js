/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
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

    this.state = {...initialState};
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
      this.setState({ [name]: value });
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
                name='issue'
                label='Issue' 
                onChange={this.handleChange}
                value={this.state.task}
              />
              <FormInput 
                name='countermeasure'
                label='Countermeasure' 
                onChange={this.handleChange}
                value={this.state.task}
              />

            </form>
          </fieldset>
        </div>
      );
  
    }
}