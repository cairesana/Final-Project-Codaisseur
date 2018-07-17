import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import './style.css';
import {fetchAllEvents} from '../actions/event'

class EventList extends PureComponent {
    static propTypes = {
      events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.number.isRequired,
        pictureUrl: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired
      })).isRequired
    }
  
    componentWillMount() {
        this.props.fetchAllEvents();
    }
    
    render() {
        const { events } = this.props;
        
        return (
          <div>
            <h1>All events</h1>
              
                { events.map(event => (<div key={event.id}>
                  <h2>{event.name}</h2>
                  <img src={event.pictureUrl} alt=""/>
                </div> ))}
                    
          </div>
        )
    }
}
    
const mapStateToProps = function (state) {
    return {
        events: state.events
    }
}
      
export default connect(mapStateToProps, { fetchAllEvents })(EventList)


