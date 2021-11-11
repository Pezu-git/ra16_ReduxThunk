import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../actions/actionCreators';
import { removeService } from '../actions/actionCreators';

class ServiceListClassBased extends Component {
    componentDidMount = () => {
        this.props.fetchServices();
    }
    handleRemove = id => {
        this.props.removeService(id);
    }
    render() {
        const {items, loading, error} = this.props;
        return (
            <ul>
                {items.map(o => <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>
                )}
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const {serviceList: {items, loading, error}} = state;
    return {items, loading, error};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchServices: () => dispatch(fetchServices()),
        removeService: id => dispatch(removeService(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);