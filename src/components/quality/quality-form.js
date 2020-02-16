import React from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class QualityForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      aIssues: false,
      cIssues: false,
      station: '',
      issue: '',
      countermeasure: '',
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.quality || this.defaultState;

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
      <div>
        <div class="form-wrapper">
          <fieldset>
            <form onSubmit={this.onSubmit} onChange={this.handleChange}>
              <label>A issue
                <input name="aIssues" type="checkbox" value={this.state.aIssues}/>
              </label>
              <label>C issue
                <input name="cIssues" type="checkbox" value={this.state.cIssues}/>
              </label>
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
        </div>
      </div>
    );
  
  }
}