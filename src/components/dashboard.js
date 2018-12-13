import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import SafetyForm from './safety-form';
import SafetyItem from './safety-item';
import QualityForm from './quality-form';
import QualityItem from './quality-item';
import DeliveryForm from './delivery-form';
import DeliveryItem from './delivery-item';
import CostForm from './cost-form';
import CostItem from './cost-item';
import MoraleItem from './morale-item';
import MoraleForm from './morale-form';
import RollupItem from './rollup-item';
import RollupForm from './rollup-form';

import {safetyAdd, safetyDelete, safetyUpdate, safetyFetch } from '../lib/reducer';
import {qualityAdd, qualityDelete, qualityUpdate, qualityFetch } from '../lib/quality-reducer';
import {deliveryAdd, deliveryDelete, deliveryUpdate, deliveryFetch } from '../lib/delivery-reducer';
import {costAdd, costDelete, costUpdate, costFetch } from '../lib/cost-reducer';
import {moraleAdd, moraleDelete, moraleUpdate, moraleFetch } from '../lib/morale-reducer';
import {rollupAdd, rollupDelete, rollupUpdate, rollupFetch } from '../lib/rollup-reducer';

import dateFormat from 'dateformat';
const now = new Date();

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
            safetyView: false,
            qualityView: false,
            deliveryView: false,
            costView: false,
            moraleView: false,
            rollupView: false,
          date: dateFormat(now,'mmm dd, yyyy'),
        }
      }
     componentDidMount() {
    this.props.safetyFetch();
    this.props.qualityFetch();
    this.props.deliveryFetch();
    this.props.costFetch();
    this.props.moraleFetch();
    this.props.rollupFetch();
    }

    // componentDidUpdate() {
    //   this.props.safetyFetch();
    //   this.props.qualityFetch();
    //   this.props.deliveryFetch();
    //   this.props.costFetch();
    //   this.props.moraleFetch();
    //   this.props.rollupFetch(); 
    // }

    updateView = (e) => {
      if(e.target.name === "safety"){
      this.setState({safetyView: true});
      } 
      else if(e.target.name === "quality"){
        this.setState({qualityView: true});
      }
      else if(e.target.name === "delivery"){
        this.setState({deliveryView: true});
      }
      else if(e.target.name === "cost"){
        this.setState({costView: true});
      }
      else if(e.target.name === "morale"){
        this.setState({moraleView: true});
      }
      else if(e.target.name === "rollup"){
        this.setState({rollupView: true});
      }
  }

    returnView = () => {

      this.setState({safetyView: false});
      this.setState({qualityView: false});
      this.setState({deliveryView: false});
      this.setState({costView: false});
      this.setState({moraleView: false});
      this.setState({rollupView: false});

      }

  render() {

    return (
       
        <Fragment>
          <nav>
            <ul>
              <li className="nav"><a href="/tier-board-client/">home</a></li>
              <li className="nav"><a href="https://tier-board.github.io/tier-board-client/#/about">about</a></li>
            </ul>
          </nav>
          <h1>Tier Board Data</h1>
            <h2>{this.state.date}</h2>
            <div className="container">
            <h2 className="container-title">SAFETY</h2>
            <button onClick={this.updateView} name="safety">Add Safety Incident</button>
            {this.state.safetyView && <SafetyForm onComplete={this.props.safetyAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.safety.map((safety)=> <li key={safety.id}>
              <SafetyItem safety={safety} onComplete={this.props.safetyUpdate} onRemove={this.props.safetyDelete} /></li>)}
            </ul>
            </div>

            <div className="container">
            <h2 className="container-title">QUALITY</h2>
            <button onClick={this.updateView} name="quality">Add Quality Issue</button>
            {this.state.qualityView && <QualityForm onComplete={this.props.qualityAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul className="list-container">
              {this.props.quality.map((quality)=> <li key={quality.id}>
              <QualityItem quality={quality} onComplete={this.props.qualityUpdate} onRemove={this.props.qualityDelete} /></li>)}
            </ul>
            </div>

            <div className="container rollup">
            <h2 className="container-title">DELIVERY ROLLUP</h2>
            <button onClick={this.updateView} name="rollup">Add Delivery Score</button>
            {this.state.rollupView && <RollupForm onComplete={this.props.rollupAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.rollup.map((rollup)=> <li key={rollup.id}>
              <RollupItem rollup={rollup} onComplete={this.props.rollupUpdate} onRemove={this.props.rollupDelete} /></li>)}
            </ul>
            </div>

            <div className="container">
            <h2 className="container-title">DELIVERY</h2>
            <button onClick={this.updateView} name="delivery">Add Delivery Issue</button>
            {this.state.deliveryView && <DeliveryForm onComplete={this.props.deliveryAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.delivery.map((delivery)=> <li key={delivery.id}>
              <DeliveryItem delivery={delivery} onComplete={this.props.deliveryUpdate} onRemove={this.props.deliveryDelete} /></li>)}
            </ul>
            </div>

            <div className="container">
            <h2 className="container-title">COST</h2>
            <button onClick={this.updateView} name="cost">Add Cost Issue</button>
            {this.state.costView && <CostForm onComplete={this.props.costAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.cost.map((cost)=> <li key={cost.id}>
              <CostItem cost={cost} onComplete={this.props.costUpdate} onRemove={this.props.costDelete} /></li>)}
            </ul>
            </div>

            <div className="container">
            <h2 className="container-title">MORALE</h2>
            <button onClick={this.updateView} name="morale">Add Morale Item</button>
            {this.state.moraleView && <MoraleForm onComplete={this.props.moraleAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul>
              {this.props.morale.map((morale)=> <li key={morale.id}>
              <MoraleItem morale={morale} onComplete={this.props.moraleUpdate} onRemove={this.props.moraleDelete} /></li>)}
            </ul>
            </div>
        </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ 
    safety: state.safety,
    quality: state.quality,
    delivery: state.delivery,
    cost: state.cost,
    morale: state.morale,
    rollup: state.rollup,

 });
 const mapDispatchToProps = (dispatch) => ({
     safetyAdd: safety => dispatch(safetyAdd(safety)),
     safetyUpdate: safety => dispatch(safetyUpdate(safety)),
     safetyFetch: safety => dispatch(safetyFetch(safety)),
     safetyDelete: safety => dispatch(safetyDelete(safety)),

     qualityAdd: quality => dispatch(qualityAdd(quality)),
     qualityUpdate: quality => dispatch(qualityUpdate(quality)),
     qualityFetch: quality => dispatch(qualityFetch(quality)),
     qualityDelete: quality => dispatch(qualityDelete(quality)),

     deliveryAdd: delivery => dispatch(deliveryAdd(delivery)),
     deliveryUpdate: delivery => dispatch(deliveryUpdate(delivery)),
     deliveryFetch: delivery => dispatch(deliveryFetch(delivery)),
     deliveryDelete: delivery => dispatch(deliveryDelete(delivery)),

     costAdd: cost => dispatch(costAdd(cost)),
     costUpdate: cost => dispatch(costUpdate(cost)),
     costFetch: cost => dispatch(costFetch(cost)),
     costDelete: cost => dispatch(costDelete(cost)),

     moraleAdd: morale => dispatch(moraleAdd(morale)),
     moraleUpdate: morale => dispatch(moraleUpdate(morale)),
     moraleFetch: morale => dispatch(moraleFetch(morale)),
     moraleDelete: morale => dispatch(moraleDelete(morale)),

     rollupAdd: rollup => dispatch(rollupAdd(rollup)),
     rollupUpdate: rollup => dispatch(rollupUpdate(rollup)),
     rollupFetch: rollup => dispatch(rollupFetch(rollup)),
     rollupDelete: rollup => dispatch(rollupDelete(rollup)),
 });
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);