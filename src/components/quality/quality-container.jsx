import React from 'react';
import { connect } from 'react-redux';
import QualityForm from './quality-form';
import QualityItem from './quality-item';
import './quality.styles.scss';
import {qualityAdd, qualityDelete, qualityUpdate, qualityFetch } from '../../redux/quality/quality.actions';

class qualityContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
    };
  }
  componentDidMount() {
    this.props.qualityFetch(); 
  }
  
      updateView = () => {
        this.setState({view: true});
      }
  
      returnView = () => {
        this.setState({view: false});
      }
  
      render(){
        let { qualityAdd, qualityUpdate, qualityDelete } = this.props;
        return(
          <div className="container">
            <h2 className="container-title">QUALITY</h2>
            <button onClick={this.updateView} name="quality">Add Quality Issue</button>
            {this.state.qualityView && <QualityForm onComplete={qualityAdd} viewChange={this.returnView} buttonText="submit"/>}
            <ul className="list-container">
              {this.props.quality.map((quality)=> <li key={quality.id}>
                <QualityItem quality={quality} onComplete={qualityUpdate} onRemove={qualityDelete} /></li>)}
            </ul>
          </div>
        );
      }
}
  
const mapStateToProps = (state) => ({ 
  quality: state.quality,
});
  
const mapDispatchToProps = (dispatch) => ({
  qualityAdd: quality => dispatch(qualityAdd(quality)),
  qualityUpdate: quality => dispatch(qualityUpdate(quality)),
  qualityFetch: quality => dispatch(qualityFetch(quality)),
  qualityDelete: quality => dispatch(qualityDelete(quality)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(qualityContainer);