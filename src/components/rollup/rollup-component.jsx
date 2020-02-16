import React from 'react';
import { connect } from 'react-redux';
import RollupForm from './rollup-form';
import RollupItem from './rollup-item';
import './rollup.styles.scss';
import {rollupAdd, rollupDelete, rollupUpdate, rollupFetch } from '../../redux/rollup/rollup.actions';

class RollupContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.rollupFetch(); 
  }
  
      updateView = () => {
        this.setState({view: true});
      }
  
      returnView = () => {
        this.setState({view: false});
      }
  
      render(){
        let { rollupAdd, rollupUpdate, rollupDelete } = this.props;
        return(
          <div className="container rollup">
            <h2 className="container-title">DELIVERY ROLLUP</h2>
            <button onClick={this.updateView} name="rollup">Add Delivery Score</button>
            {this.state.rollupView && <RollupForm onComplete={rollupAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.rollup.map((rollup)=> <li key={rollup.id}>
                <RollupItem rollup={rollup} onComplete={rollupUpdate} onRemove={rollupDelete} /></li>)}
            </ul>
          </div>
        );
      }
}
  
const mapStateToProps = (state) => ({ 
  rollup: state.rollup,
});
  
const mapDispatchToProps = (dispatch) => ({
  rollupAdd: rollup => dispatch(rollupAdd(rollup)),
  rollupUpdate: rollup => dispatch(rollupUpdate(rollup)),
  rollupFetch: rollup => dispatch(rollupFetch(rollup)),
  rollupDelete: rollup => dispatch(rollupDelete(rollup)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(RollupContainer);