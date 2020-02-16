import React from 'react';
import { connect } from 'react-redux';
import CostItem from './cost-item';
import CostForm from './cost-form';
import {costAdd, costDelete, costUpdate, costFetch } from '../../redux/cost/cost.actions';
import './cost.styles.scss';

class CostContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.costFetch(); 
  }

    updateView = () => {
      this.setState({view: true});
    }

    returnView = () => {
      this.setState({view: false});
    }

    render(){
      let { costAdd, costUpdate, costDelete } = this.props;
      return(
        <div className="container">
          <h2 className="container-title">COST</h2>
          <button onClick={this.updateView} name="cost">Add Cost Issue</button>
          {this.state.view && <CostForm onComplete={costAdd} viewChange={this.returnView} buttonText="submit"/>}
          <ul>
            {this.props.cost.map((cost)=> 
              <li key={cost.id}>
                <CostItem cost={cost} onComplete={costUpdate} onRemove={costDelete} 
                />
              </li>)}
          </ul>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({ 
  cost: state.cost,
});

const mapDispatchToProps = (dispatch) => ({
  costAdd: cost => dispatch(costAdd(cost)),
  costUpdate: cost => dispatch(costUpdate(cost)),
  costFetch: cost => dispatch(costFetch(cost)),
  costDelete: cost => dispatch(costDelete(cost)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CostContainer);
