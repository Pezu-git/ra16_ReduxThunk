import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeServiceField, addService } from '../actions/actionCreators';

function ServiceAdd(props) {
    const { item } = props;
    const handleChange = evt => {
        const { name, value } = evt.target;
        props.onChange(name, value);
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        props.onSave(item.name, item.price);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
        </form>
    )
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
    export default connect(mapStateToProps, mapDispatchToProps)(ServiceAdd);