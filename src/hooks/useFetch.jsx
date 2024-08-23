import {React,useState} from 'react';
import axios from 'axios';
// we can use this redux hook to add dispatch our created action to the store
import { useDispatch } from 'react-redux';
import { updateData,updateError,updateLoader } from '../Redux/actions/productList';

const useFetch = () => {

    const dispatch = useDispatch()

    const baseURL = 'https://zain64-design.github.io/product.json';

    function fetchData() {
      // now this hook will transfer our actions to the reducer fn
        dispatch(updateLoader(true));
        dispatch(updateError(''));
        dispatch(updateData([]));
        
        setTimeout(()=> {
            axios.get(baseURL).then((response) => {
                // console.log(response.data);
                dispatch(updateData(response.data));
              })
              .catch((e)=> {
                // console.error(e);
                dispatch(updateError('Failed to fetch data'));
              })
              .finally(()=> {
                dispatch(updateLoader(false));
              });
        },5000)
    }

  return {fetchData}
}

export default useFetch