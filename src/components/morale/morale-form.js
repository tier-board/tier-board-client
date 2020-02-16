import React from 'react';
import dateFormat from 'dateformat';
const now = new Date();
export default class MoraleForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      station: '',
      task: '',
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.props.morale || this.defaultState;

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
              <label>Station
                <input name="station" type="text" value={this.state.station}/>
              </label>
              <label>Task
                <input name="task" type="text" value={this.state.task}/>
              </label>
              <button>{this.props.buttonText}</button>
            </form>
          </fieldset>
        </div>
      </div>
    );
  
  }
}