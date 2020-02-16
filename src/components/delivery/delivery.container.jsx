import React from 'react';
import { connect } from 'react-redux';
import DeliveryItem from './delivery-item';
import DeliveryForm from './delivery-form';
import {deliveryAdd, deliveryDelete, deliveryUpdate, deliveryFetch } from '../../redux/delivery/delivery.actions';
import './delivery.styles.scss';

class DeliveryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.deliveryFetch(); 
  }

    updateView = () => {
      this.setState({view: true});
    }

    returnView = () => {
      this.setState({view: false});
    }

    render(){
      let { deliveryAdd, deliveryUpdate, deliveryDelete } = this.props;
      return(
        <div className="container">
          <h2 className="container-title">DELIVERY</h2>
          <button onClick={this.updateView} name="delivery">Add delivery Issue</button>
          {this.state.view && <DeliveryForm onComplete={deliveryAdd} viewChange={this.returnView} buttonText="submit"/>}
          <ul>
            {this.props.delivery.map((delivery)=> 
              <li key={delivery.id}>
                <DeliveryItem delivery={delivery} onComplete={deliveryUpdate} onRemove={deliveryDelete} 
                />
              </li>)}
          </ul>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({ 
  delivery: state.delivery,
});

const mapDispatchToProps = (dispatch) => ({
  deliveryAdd: delivery => dispatch(deliveryAdd(delivery)),
  deliveryUpdate: delivery => dispatch(deliveryUpdate(delivery)),
  deliveryFetch: delivery => dispatch(deliveryFetch(delivery)),
  deliveryDelete: delivery => dispatch(deliveryDelete(delivery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContainer);