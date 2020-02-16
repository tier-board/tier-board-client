import React from 'react';
import { connect } from 'react-redux';
import SafetyForm from './safety-form';
import SafetyItem from './safety-item';
import './safety.styles.scss';
import {safetyAdd, safetyDelete, safetyUpdate, safetyFetch } from '../../redux/safety/safety.actions';

class SafetyContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.safetyFetch(); 
  }
  
      updateView = () => {
        this.setState({view: true});
      }
  
      returnView = () => {
        this.setState({view: false});
      }
  
      render(){
        let { safetyAdd, safetyUpdate, safetyDelete } = this.props;
        return(
          <div className="container">
            <h2 className="container-title">SAFETY</h2>
            <button onClick={this.updateView} name="safety">Add Safety Incident</button>
            {this.state.safetyView && <SafetyForm onComplete={safetyAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.safety.map((safety)=> <li key={safety.id}>
                <SafetyItem safety={safety} onComplete={safetyUpdate} onRemove={safetyDelete} /></li>)}
            </ul>
          </div>
        );
      }
}
  
const mapStateToProps = (state) => ({ 
  safety: state.safety,
});
  
const mapDispatchToProps = (dispatch) => ({
  safetyAdd: safety => dispatch(safetyAdd(safety)),
  safetyUpdate: safety => dispatch(safetyUpdate(safety)),
  safetyFetch: safety => dispatch(safetyFetch(safety)),
  safetyDelete: safety => dispatch(safetyDelete(safety)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SafetyContainer);