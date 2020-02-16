import React from 'react';
import { connect } from 'react-redux';
import MoraleForm from './morale-form';
import MoraleItem from './morale-item';
import './morale.styles.scss';
import {moraleAdd, moraleDelete, moraleUpdate, moraleFetch } from '../../redux/morale/morale.actions';

class MoraleContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.moraleFetch(); 
  }
  
      updateView = () => {
        this.setState({view: true});
      }
  
      returnView = () => {
        this.setState({view: false});
      }
  
      render(){
        let { moraleAdd, moraleUpdate, moraleDelete } = this.props;
        return(
          <div className="container">
            <h2 className="container-title">MORALE</h2>
            <button onClick={this.updateView} name="morale">Add Morale Item</button>
            {this.state.moraleView && <MoraleForm onComplete={moraleAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.morale.map((morale)=> <li key={morale.id}>
                <MoraleItem morale={morale} onComplete={moraleUpdate} onRemove={moraleDelete} /></li>)}
            </ul>
          </div>
        );
      }
}
  
const mapStateToProps = (state) => ({ 
  morale: state.morale,
});
  
const mapDispatchToProps = (dispatch) => ({
  moraleAdd: morale => dispatch(moraleAdd(morale)),
  moraleUpdate: morale => dispatch(moraleUpdate(morale)),
  moraleFetch: morale => dispatch(moraleFetch(morale)),
  moraleDelete: morale => dispatch(moraleDelete(morale)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(MoraleContainer);