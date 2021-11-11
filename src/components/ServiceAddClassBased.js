import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeServiceField, addService } from '../actions/actionCreators';

class ServiceAdd extends Component {
    handleChange = evt => {
        const { name, value } = evt.target;
        this.props.onChange(name, value);
    }
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSave(this.props.item.name, this.props.item.price);
    }
    render() {
        const { item } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='name' onChange={this.handleChange} value={item.name} />
                <input name='price' onChange={this.handleChange} value={item.price} />
                <button type='submit'>Save</button>
            </form>
        )
    }
}

ServiceAdd.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    }

    const mapStateToProps = (state, ownProps) => {
        const { serviceAdd: {item, loading, error} } = state;
        return { item, loading, error };
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onChange: (name, value) => dispatch(changeServiceField(name, value)),
            onSave: (name, value) => dispatch(addService(name, value)),
        }
    };
    export default connect(mapStateToProps, mapDispatchToProps)(ServiceAdd );