import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchServices, removeService } from '../actions/actionCreators';


export default function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
    }, [dispatch]);

  const handleRemove = id => { 
    dispatch(removeService(id));
  }
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